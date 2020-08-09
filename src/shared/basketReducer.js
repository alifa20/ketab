export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const SET_STATE = "SET_STATE";

export const basketReducer = (state, action) => {
  console.log("in reducer", action, state);
  switch (action.type) {
    case ADD: {
      const current = { ...state.basket };
      // const basket = [...current, action.item];
      current[action.item.id] = true;

      const basket = { ...current };
      return { ...state, basket };
    }
    case REMOVE: {
      const current = { ...state.basket };
      current[action.item.id] = false;
      const basket = { ...current };
      return { ...state, basket };
    }

    case SET_STATE:
      return { ...state, basket: action.items };
    default:
      throw new Error();
  }
};

export default basketReducer;
