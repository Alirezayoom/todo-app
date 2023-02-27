import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { useState } from "react";

interface Todos {
  id: string;
  text: string;
}

function App() {
  const [todos, setTodos] = useState<Todos[]>([]);

  const addHandler = (text: string) => {
    console.log(text);
    setTodos((prevState) => [
      ...prevState,
      { id: Math.random().toString(), text: text },
    ]);
  };

  return (
    <div className="max-w-full grid justify-center">
      <NewTodo onAddTodo={addHandler} />
      <TodoList items={todos} />
    </div>
  );
}

export default App;
