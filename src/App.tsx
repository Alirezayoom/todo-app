import TodoList from "./components/TodoList";

function App() {
  const todos = [{ id: 1, task: "practice typescript" }];

  return (
    <div className="bg-transparent">
      <TodoList items={todos} />
    </div>
  );
}

export default App;
