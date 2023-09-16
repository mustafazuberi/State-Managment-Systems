import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../store/features/todoSlice";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoReducer.todos);

  if (!todos || !todos.length) {
    return <h1 className="text-[26px] mt-6">No Todos Added</h1>;
  }

  return (
    <div>
      <div className="todos flex flex-col mt-6 gap-y-3">
        {todos.map((todo) => {
          return (
            <div
              key={todo.id}
              className="py-3 w-full border flex flex-row justify-between px-2"
            >
              <span className="text-[22px] font-mono">{todo.text}</span>
              <AiFillDelete
                className="text-red-500 text-[26px] cursor-pointer"
                onClick={() => dispatch(removeTodo(todo.id))}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todos;
