import auth0 from "auth0-js";
import { navigate } from "gatsby";

const isBrowser = "undefined" !== typeof window;

const auth = isBrowser
  ? new auth0.WebAuth({
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENTID,
      redirectUri: process.env.AUTH0_CALLBACK,
      responseType: "token id_token",
      scope: "openid profile email",
    })
  : {};

// insert after auth const
const tokens = {
  accessToken: false,
  idToken: false,
  expiresAt: false,
};

let user = {};

export const isAuthenticated = () => {
  if (!isBrowser) {
    return;
  }

  return localStorage.getItem("isLoggedIn") === "true";
};

export const login = () => {
  if (!isBrowser) {
    return;
  }

  auth.authorize();
};

const setSession = (cb = () => {}) => (err, authResult) => {
  if (err) {
    // navigate("/");
    cb();
    return;
  }

  if (authResult && authResult.accessToken && authResult.idToken) {
    let expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
    tokens.accessToken = authResult.accessToken;
    tokens.idToken = authResult.idToken;
    tokens.expiresAt = expiresAt;
    user = authResult.idTokenPayload;
    localStorage.setItem("isLoggedIn", true);
    console.log("heeeeeee", localStorage.getItem("isLoggedIn"));
    localStorage.getItem("isLoggedIn") !== "true" && navigate("/"); // Page to redirect after logged in.
    cb();
  }
};

export const handleAuthentication = () => {
  if (!isBrowser) {
    return;
  }

  const callback = navigate("/");
  auth.parseHash(setSession(callback));
};

export const getProfile = () => {
  return user;
};

export const silentAuth = (callback) => {
  if (!isAuthenticated()) return callback();
  auth.checkSession({}, setSession(callback));
};

export const logout = () => {
  localStorage.setItem("isLoggedIn", false);
  auth.logout();
};
