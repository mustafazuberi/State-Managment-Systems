import React, { useContext, useReducer } from "react";
import { initialState } from "./initialState";
import reducer from "./reducer";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateName = (newName) => {
    if (!newName) {
      throw new Error("cannot call function without passing name!");
      return;
    }
    return dispatch({
      type: "updateName",
      payload: newName,
    });
  };

  const updateAge = (newAge) => {
    if (!newAge) {
      throw new Error("cannot call function without passing age!");
      return;
    }
    return dispatch({
      type: "updateAge",
      payload: newAge,
    });
  };

  return (
    <AppContext.Provider value={{ ...state, updateName, updateAge }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
