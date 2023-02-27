interface TodoListTypes {
  items: { id: string; text: string }[];
}

export default function TodoList(props: TodoListTypes) {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
