interface TodoListTypes {
  items: { id: number; task: string }[];
}

export default function TodoList(props: TodoListTypes) {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>{todo.task}</li>
      ))}
    </ul>
  );
}
