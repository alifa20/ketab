import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

export const BookPageTemplate = () => <div>This is Bookpage</div>;

const BookPage = ({ data }) => {
  const { allMarkdownRemark: post } = data;

  return null;
};

BookPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BookPage;

export const BookPageQuery = graphql`
  query BookSellerPage {
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
