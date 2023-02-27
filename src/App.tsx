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

  const deleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className="w-[500px] mx-auto grid ">
      <NewTodo onAddTodo={addHandler} />
      <TodoList items={todos} onDelete={deleteHandler} />
    </div>
  );
}

export default App;
