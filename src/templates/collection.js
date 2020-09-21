import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { BookCardList } from "../components/BookCardList";
import CategoriesFilterList from "../components/CategoriesFilterList";
import Layout from "../components/Layout";
import "../assets/scss/_sidebar.scss";
// import "../assets/scss/_blog.scss";
import "../assets/scss/_shop.scss";

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

const Collection = ({ data }) => {
  const { edges } = data.books;
  const { edges: categories } = data.categories;
  const books = edges
    .filter((book) => book.node.frontmatter)
    .map((book) => book.node);

  return (
    <Layout>
      <div className="shop-area pt-95 pb-100 section-padding-1">
        <div className="container-fluid">
          <div className="row flex-row-reverse">
            <div className="col-lg-9">
              <div className="shop-bottom-area mt-35">
                <BookCardList books={books} />
                <div className="pro-pagination-style text-center mt-30">
                  <ul>
                    <li>
                      <a className="prev" href="#">
                        <i className="fa fa-angle-double-left"></i>
                      </a>
                    </li>
                    <li>
                      <a className="active" href="#">
                        1
                      </a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a className="next" href="#">
                        <i className="fa fa-angle-double-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="  sidebar-style mr-30">
                <div className="sidebar-widget">
                  <h4 className="pro-sidebar-title">Search </h4>
                  <div className="pro-sidebar-search mb-50 mt-25">
                    <form className="pro-sidebar-search-form" action="#">
                      <input type="text" placeholder="Search here..." />
                      <button>
                        <i className="pe-7s-search"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="sidebar-widget mt-50">
                <h4 className="pro-sidebar-title">Categories </h4>
                <div className="sidebar-widget-list mt-20">
                  <CategoriesFilterList categories={categories} />
                </div>
              </div>
            </div>
          </div>
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
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            path
            heading
            description
            subheading
            date
            featuredpost
            book
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 270, quality: 100) {
                  src
                }
              }
            }
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
