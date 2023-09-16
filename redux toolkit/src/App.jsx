import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="max-w-[400px] mx-auto mt-12">
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
