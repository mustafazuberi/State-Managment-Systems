import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrementNumber, incrementNumber } from "./state/actions";

const App = () => {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <div className="mainApp">
      <h1>{myState}</h1>
      <div className="buttonDiv">
        <button onClick={() => dispatch(incrementNumber())}>+</button>
        <button onClick={() => dispatch(decrementNumber())}>-</button>
      </div>
    </div>
  );
};

export default App;
