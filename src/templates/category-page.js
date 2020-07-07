import React from "react";

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
  query CategoryPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
