import React from "react";
import Layout from "../Layout";
import Breadcrumb from "../Breadcrumb";
import Content from "./Content";
import Description from "./Description";
import RelatedBooks from "./RelatedBooks";

const BookDetailsPage = ({ data }) => {
  const { markdownRemark: book } = data;

  return (
    <Layout>
      <Breadcrumb back="/" backText="Home" current="Book Details" />
      <Content data={book} />
      <Description data={book} />
      <RelatedBooks data={book} />
    </Layout>
  );
};

export default BookDetailsPage;
