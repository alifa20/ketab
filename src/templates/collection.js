import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
// import { BookCardList } from "../components/BookCardList";
// import CategoriesFilterList from "../components/CategoriesFilterList";
// import Layout from "../components/Layout";
// import "../assets/scss/_sidebar.scss";
// // import "../assets/scss/_blog.scss";
// import "../assets/scss/_shop.scss";
import CollectionPage from "../components/CollectionPage";

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

const Collection = ({ data, pageContext }) => (
  <CollectionPage {...{ data, pageContext }} />
);

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
