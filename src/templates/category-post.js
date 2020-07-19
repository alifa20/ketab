import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

export const CategoryPageTemplate = () => <div>This is categorypage</div>;

const CategoryPage = () => {
  // const { allMarkdownRemark: post } = data;

  return null;
  // <Layout>
  //   <CategoryPageTemplate
  //     contentComponent={HTMLContent}
  //     title={post.frontmatter.title}
  //     content={post.html}
  //   />
  // </Layout>
};

CategoryPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CategoryPage;

export const categoryPageQuery = graphql`
  query CategoryPage {
    allMarkdownRemark(
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
          }
        }
      }
    }
  }
`;
