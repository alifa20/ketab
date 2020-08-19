import { withPrefix } from "gatsby";
import React, { useReducer, useEffect } from "react";
import { Helmet } from "react-helmet";
import "../assets/css/bootstrap.min.css";
import "../assets/css/fonts.css";
import "../assets/css/icons.min.css";
// import "../assets/css/plugins.css";
import "../assets/css/style.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { basketReducer, RootContext, initialState } from "../shared";
// import "./all.sass";
import useSiteMetadata from "./SiteMetadata";
import netlifyIdentity from "netlify-identity-widget";

// export const RootContext = React.createContext({ basket: [], wishList: [] });

const TemplateWrapper = ({ children, isHome }) => {
  useEffect(() => {
    window.netlifyIdentity = netlifyIdentity;
    netlifyIdentity.init({});
  }, []);

  const { title, description } = useSiteMetadata();

  const [state, dispatch] = useReducer(basketReducer, initialState);

  return (
    <RootContext.Provider value={{ state, dispatch }}>
      <div>
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${withPrefix("/")}img/apple-touch-icon.png`}
          />
          <link
            rel="icon"
            type="image/png"
            href={`${withPrefix("/")}img/favicon-32x32.png`}
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href={`${withPrefix("/")}img/favicon-16x16.png`}
            sizes="16x16"
          />

          <link
            rel="mask-icon"
            href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
            color="#ff4400"
          />
          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={title} />
          <meta property="og:url" content="/" />
          <meta
            property="og:image"
            content={`${withPrefix("/")}img/og-image.jpg`}
          />
        </Helmet>
        <Navbar isHome={isHome} />
        <div>{children}</div>
        <Footer />
      </div>
    </RootContext.Provider>
  );
};

export default TemplateWrapper;
