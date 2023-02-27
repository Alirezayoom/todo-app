import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

function App() {
  const todos = [{ id: 1, task: "practice typescript" }];

  return (
    <div className="max-w-full grid justify-center">
      <NewTodo />
      <TodoList items={todos} />
    </div>
  );
}

export default App;
