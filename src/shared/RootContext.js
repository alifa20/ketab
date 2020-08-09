import React from "react";
import constants from "./constants";

const basketLocalStorage = window.localStorage.getItem(constants.BASKET_KEY);
// const basket = basketLocalStorage ? JSON.parse(basketLocalStorage) : [];
// console.log("heyyyyy", basketLocalStorage);

export const initialState = { basket: [], wishList: [] };

export const RootContext = React.createContext(initialState);
