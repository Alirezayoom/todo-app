import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

function App() {
  const todos = [{ id: 1, task: "practice typescript" }];

  const addHandler = (text: string) => {
    console.log(text);
  };

  return (
    <div className="max-w-full grid justify-center">
      <NewTodo onAddTodo={addHandler} />
      <TodoList items={todos} />
    </div>
  );
}

export default App;
