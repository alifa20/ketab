export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const SET_STATE = "SET_STATE";

export const basketReducer = (state, action) => {
  console.log("in reducer", action);
  switch (action.type) {
    case ADD:
      const current = state.basket;
      const basket = [...current, action.item];
      return { ...state, basket };
    case REMOVE:
      return state;

    case SET_STATE:
      return { ...state, basket: action.items };
    default:
      throw new Error();
  }
};

export default basketReducer;
