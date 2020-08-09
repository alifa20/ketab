import React from "react";
import constants from "./constants";

export const initialState = { basket: {}, wishList: [] };

export const RootContext = React.createContext(initialState);
