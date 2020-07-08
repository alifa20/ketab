import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { HTMLContent } from "../components/Content";
import Layout from "../components/Layout";

export const CategoryPageTemplate = () => <div>This is categorypage</div>;

const CategoryPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <CategoryPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
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
