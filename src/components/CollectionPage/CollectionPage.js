import React from "react";
import Pagination from "./Pagination";
import Layout from "../Layout";
import { BookCardList } from "../BookCardList";
import CategoriesFilterList from "../CategoriesFilterList";
import "../../assets/scss/_sidebar.scss";
// import "../../assets/scss/_blog.scss";
import "../../assets/scss/_shop.scss";

const CollectionPage = ({ data, pageContext }) => {
  console.log("heeeeeeee pageContext", pageContext);
  const { numPages, currentPage } = pageContext;
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
                <Pagination numPages={numPages} currentPage={currentPage} />
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

export default CollectionPage;
