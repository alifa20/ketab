const _ = require("lodash");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach((edge) => {
      const id = edge.node.id;
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      });
    });

    // Tag pages:
    let tags = [];
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach((edge) => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags);
      }
    });
    // Eliminate duplicate tags
    tags = _.uniq(tags);

    // Make tag pages
    tags.forEach((tag) => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`;

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag,
        },
      });
    });

    // Create collection pages

    const postsPerPage = 3;
    const numPages = Math.ceil(posts.length / postsPerPage);
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/collection` : `/collection/${i}`,
        component: path.resolve("./src/templates/collection.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          // currentPage: i + 1,
          currentPage: i,
        },
      });
    });

    // Cart page
    createPage({
      path: "/cart",
      component: path.resolve("./src/templates/cart-page.js"),
      context: {},
    });
    // Create cart page

    // Create book page

    // End of Create book page
  });
};

exports.sourceNodes = ({ boundActionCreators, getNodes, getNode }) => {
  const { createNodeField } = boundActionCreators;

  const postsOfBooks = {};
  // iterate thorugh all markdown nodes to link books to book
  // and build book index
  const markdownNodes = getNodes()
    .filter((node) => node.internal.type === "MarkdownRemark")
    .forEach((node) => {
      if (node.frontmatter.book) {
        const bookNode = getNodes().find(
          (node2) =>
            node2.internal.type === "MarkdownRemark" &&
            node2.frontmatter.title === node.frontmatter.book
        );

        if (bookNode) {
          createNodeField({
            node,
            name: "book",
            value: bookNode.id,
          });

          // if it's first time for this book init empty array for his posts
          if (!(bookNode.id in postsOfBooks)) {
            postsOfBooks[bookNode.id] = [];
          }
          // add book to this book
          postsOfBooks[bookNode.id].push(node.id);
        }
      }
    });

  Object.entries(postsOfBooks).forEach(([bookNodeId, postIds]) => {
    createNodeField({
      node: getNode(bookNodeId),
      name: "posts",
      value: postIds,
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    /*
     * During the build step, `auth0-js` will break because it relies on
     * browser-specific APIs. Fortunately, we don’t need it during the build.
     * Using Webpack’s null loader, we’re able to effectively ignore `auth0-js`
     * during the build. (See `src/utils/auth.js` to see how we prevent this
     * from breaking the app.)
     */
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /auth0-js/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
