import { useContext, useEffect } from "react";
import { ADD, REMOVE, SET_STATE } from "./basketReducer";
import { RootContext } from "./RootContext";

export function useBasket(key, initialValue = {}) {
  const { state, dispatch } = useContext(RootContext);

  const add = (item) => {
    // window.localStorage.setItem(key, JSON.stringify([...state.basket, item]));
    dispatch({ type: ADD, item });
  };
  const remove = (item) => dispatch({ type: REMOVE, item });
  //   const set = (items) => dispatch({ type: SET_STATE, items });

  useEffect(() => {
    const items = window.localStorage.getItem(key);
    dispatch({
      type: SET_STATE,
      items: items ? JSON.parse(items) : initialValue,
    });
  }, [dispatch, JSON.stringify(initialValue), key]);

  const items = state.basket;
  return {
    add,
    items,
    remove,
    // set
  };
}

export default useBasket;
