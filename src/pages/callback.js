import React from "react";
import { handleAuthentication } from "../utils/auth";
import { isBrowser } from "../utils/auth";

const Callback = () => {
  handleAuthentication();
  if (!isBrowser) return <p>Loading...</p>;

  const storage = localStorage.getItem("isLoggedIn");

  return <p>Loading...</p>;
};

export default Callback;
