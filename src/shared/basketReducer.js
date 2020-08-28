import { BASKET_KEY } from "./constants";

export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const SET_STATE = "SET_STATE";

export const basketReducer = (state, action) => {
  switch (action.type) {
    case ADD: {
      const current = { ...state.basket };
      current[action.item.id] = { item: action.item };
      const basket = { ...current };
      const newState = { ...state, basket };
      window.localStorage.setItem(BASKET_KEY, JSON.stringify(newState));
      return newState;
    }
    case REMOVE: {
      const current = { ...state.basket };
      current[action.item.id] = false;
      const basket = { ...current };
      const newState = { ...state, basket };
      window.localStorage.setItem(BASKET_KEY, JSON.stringify(newState));
      return newState;
    }

    case SET_STATE: {
      return { ...state, ...action.items };
    }
    // return { ...state, basket: action.items };
    default:
      throw new Error();
  }
};

export default basketReducer;
