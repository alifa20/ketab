import { graphql, Link } from "gatsby";
import { kebabCase } from "lodash";
import PropTypes from "prop-types";
import React from "react";
import Content from "../components/Content";
import Layout from "../components/Layout";

// export const CollectionTemplate = ({
//   content,
//   contentComponent,
//   description,
//   tags,
//   title,
//   helmet,
// }) => {
//   const PostContent = contentComponent || Content;

//   return (
//     <section className="section">
//       {helmet || ""}
//       <div className="container content">
//         <div className="columns">
//           <div className="column is-10 is-offset-1">
//             <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
//               {title}
//             </h1>
//             <p>{description}</p>
//             <PostContent content={content} />
//             {tags && tags.length ? (
//               <div style={{ marginTop: `4rem` }}>
//                 <h4>Tags</h4>
//                 <ul className="taglist">
//                   {tags.map((tag) => (
//                     <li key={tag + `tag`}>
//                       <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ) : null}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// CollectionTemplate.propTypes = {
//   content: PropTypes.node.isRequired,
//   contentComponent: PropTypes.func,
//   description: PropTypes.string,
//   title: PropTypes.string,
//   helmet: PropTypes.object,
// };

const Collection = () => {
  // const { edges } = data.books;
  // const { edges: categories } = data.categories;

  return (
    <Layout>
      <div className="slider-area">
        <div className="slider-active-2 owl-carousel nav-style-3">
          <div
            className="slider-height-5 d-flex align-items-center bg-img"
            style={{
              backgroundPosition: `top left`,
              backgroundAttachment: `fixed`,
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                  <div className="slider-content-6 slider-animated-1 text-center">
                    <h1 className="animated">title</h1>
                    <p className="animated">subheading</p>
                    <div className="slider-btn-5 btn-hover">
                      <a className="animated" href="shop.html">
                        SHOP NOW
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div
              className="slider-height-5 d-flex align-items-center bg-img"
              style={{
                backgroundImage: `url(${
                  !!image.childImageSharp
                    ? image.childImageSharp.fluid.src
                    : image
                })`,
                backgroundPosition: `top left`,
                backgroundAttachment: `fixed`,
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                    <div className="slider-content-6 slider-animated-1 text-center">
                      <h1 className="animated">Welcome to Flone</h1>
                      <p className="animated">30% off Summer Vacation</p>
                      <div className="slider-btn-5 btn-hover">
                        <a className="animated" href="shop.html">
                          SHOP NOW
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
        </div>
      </div>
      {/* <ul>
        {categories.map(({ node: category }) => (
          <li>{category.frontmatter.title}</li>
        ))}
      </ul>
      {edges.map(({ node: post }) => (
        <CollectionTemplate
          content={post.html}
          contentComponent={HTMLContent}
          description={post.frontmatter.description}
          helmet={
            <Helmet titleTemplate="%s | Blog">
              <title>{`${post.frontmatter.title}`}</title>
              <meta
                name="description"
                content={`${post.frontmatter.description}`}
              />
            </Helmet>
          }
          tags={post.frontmatter.tags}
          title={post.frontmatter.title}
        />
      ))} */}
    </Layout>
  );
};

Collection.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default Collection;

export const pageQuery = graphql`
  query CollectionQuery($skip: Int!, $limit: Int!) {
    books: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { templateKey: { eq: "book-post" } } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
    categories: allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { templateKey: { eq: "category-post" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            tags
            templateKey
            title
          }
        }
      }
    }
  }
`;
