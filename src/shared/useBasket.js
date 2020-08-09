import React, { useEffect, useState, useContext, useReducer } from "react";
import { RootContext } from "./RootContext";
import basketReducer, {
  SET_STATE,
  ADD,
  REMOVE,
  SET_STATE2,
} from "./basketReducer";

// export const useLocalStorage = (initialValue, key) => {
//   const [storedValue, setStoredValue] = useState(() => {
//     try {
//       const item = window.localStorage.getItem(key);
//       return item ? JSON.parse(item) : initialValue;
//     } catch (err) {
//       console.error(err);
//       return initialValue;
//     }
//   });

//   const setValue = (value) => {
//     try {
//       const valueToStore =
//         value instanceof Function ? value(storedValue) : value;
//       setStoredValue(valueToStore);
//       window.localStorage.setItem(key, JSON.stringify(valueToStore));
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return [storedValue, setValue];
// };

export const useLocalStorage = (initialValue, key) => {
  // const theme = useContext(ThemeContext);

  //   const [storedValue, setStoredValue] = useState(initialValue);
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.warn("Setting localStorage went wrong: ", err);
      return initialValue;
    }
  });

  const setValue = (value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
    setStoredValue(value);
  };

  //   useEffect(() => {
  //     function checkUsetData() {
  //       console.log("checkUsetData");

  //       const item = localStorage.getItem(key);

  //       if (item) {
  //         setStoredValue(JSON.parse(item));
  //       }
  //     }

  //     window.addEventListener("storage", checkUsetData, false);

  //     return () => {
  //       window.removeEventListener("storage", checkUsetData);
  //     };
  //   }, []);

  return [storedValue, setValue];
};

const setInitial = (initialValue, storedValue, key) => {
  if (storedValue) return storedValue;

  const item = window.localStorage.getItem(key);
  return item ? JSON.parse(item) : initialValue;
};

export function useBasket(key, initialValue = []) {
  const { state, dispatch } = useContext(RootContext);

  const add = (item) => {
    window.localStorage.setItem(key, JSON.stringify([...state.basket, item]));
    dispatch({ type: ADD, item });
  };
  const remove = (item) => dispatch({ type: REMOVE, item });
  //   const set = (items) => dispatch({ type: SET_STATE, items });

  useEffect(() => {
    const items = window.localStorage.getItem(key);
    // setState(items ? JSON.parse(items) : initialValue);
    console.log("hheeehhhe reducer", items);
    dispatch({
      type: SET_STATE,
      items: items ? JSON.parse(items) : initialValue,
    });
  }, []);

  const items = state.basket;
  console.log("itemsitemsitems", items);
  return {
    add,
    items,
    remove,
    // set
  };
  //   //   const basket = useContext(RootContext);

  //   //   const [value, setValue] = useContext(() => {
  //   //     console.log("useStateuseState");
  //   //     const stickyValue = window.localStorage.getItem(key);
  //   //     return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  //   //   });

  //   //   const [storedValue, setStoredValue] = useContext(RootContext);
  //   const { state, dispatch } = useContext(RootContext);

  //   const add = (item) => {
  //     dispatch({ type: ADD, item });
  //   };
  //   const remove = (item) => dispatch({ type: ADD, item });
  //   const c = useContext(RootContext);

  //   console.log("ccccccc", c);
  //   //   const value = setInitial(initialValue, storedValue, key);

  //   //   const [value, setValue] = useContext(() => {
  //   //     console.log("useStateuseState");
  //   //     const stickyValue = window.localStorage.getItem(key);
  //   //     return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  //   //   });

  //   useEffect(() => {
  //     const items = window.localStorage.getItem(key);
  //     setState(items ? JSON.parse(items) : initialValue);
  //     dispatch({ type: SET_STATE, items });
  //   }, [key, value]);

  //   const setValue = (value) => {
  //     window.localStorage.setItem(key, JSON.stringify(value));
  //     setStoredValue(value);
  //   };

  //   //   useEffect(() => {
  //   //     function checkUsetData() {
  //   //       const item = localStorage.getItem("userData");

  //   //       if (item) {
  //   //         setUserData(item);
  //   //       }
  //   //     }

  //   //     window.addEventListener("storage", checkUsetData);

  //   //     return () => {
  //   //       window.removeEventListener("storage", checkUsetData);
  //   //     };
  //   //   }, []);

  //   return { value, setValue, add, remove };
}

export default useBasket;
