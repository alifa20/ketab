import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import BookDetailsPage from "../components/BookDetailsPage";

export const BookPageTemplate = () => <div>This is Bookpage</div>;

const BookPage = ({ data }) => <BookDetailsPage data={data} />;

BookPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BookPage;

export const BookPageQuery = graphql`
  query BookPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        templateKey
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
