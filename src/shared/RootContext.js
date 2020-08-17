import React from "react";

export const initialState = { basket: {}, wishList: [] };

export const RootContext = React.createContext(initialState);
