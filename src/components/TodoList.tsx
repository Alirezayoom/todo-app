interface TodoListTypes {
  items: { id: string; text: string }[];
  onDelete: (id: string) => void;
}

export default function TodoList(props: TodoListTypes) {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={props.onDelete.bind(null, todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
