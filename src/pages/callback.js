import React from "react";
import { handleAuthentication } from "../utils/auth";

const Callback = () => {
  handleAuthentication();
  const storage = localStorage.getItem("isLoggedIn");

  return <p>Loading...</p>;
};

export default Callback;
