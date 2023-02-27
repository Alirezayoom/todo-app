interface TodoListTypes {
  items: { id: string; text: string }[];
  onDelete: (id: string) => void;
}

export default function TodoList(props: TodoListTypes) {
  return (
    <ul className="grid gap-2">
      {props.items.map((todo) => (
        <li key={todo.id} className="flex items-center justify-between">
          <span>{todo.text}</span>
          <button
            onClick={props.onDelete.bind(null, todo.id)}
            className="bg-red-500 text-white hover:bg-red-600 px-4 py-1"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
