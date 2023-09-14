import React, { useReducer } from "react";

const UseReducerHook = () => {
  const initialState = 0;

  const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
      return Number(state) + 1;
    }
    if (action.type === "DECREMENT") {
      return Number(state) - 1;
    }
    return action;
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <h1>{state}</h1>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>Inc</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>Dec</button>
      </div>
    </div>
  );
};

export default UseReducerHook;
