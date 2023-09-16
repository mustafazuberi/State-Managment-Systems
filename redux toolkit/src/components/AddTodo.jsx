import React, { useState } from "react";
import { addTodo } from "../store/features/todoSlice";
import { useDispatch } from "react-redux";

const AddTodo = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input) {
      return;
    }
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div>
      <form onSubmit={addTodoHandler}>
        <div className="w-full flex flex-row ">
          <input
            type="text"
            className="py-2 px-4 border-2 border-gray-300 outline-none w-full"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter Todo Here"
            value={input}
          />
          <button className="bg-gray-300 py-2 border-2 border-gray-300 px-4 text-white hover:bg-gray-400 hover:border-gray-400 duration-300 min-w-[110px]">
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
