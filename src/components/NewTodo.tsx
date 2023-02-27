import { useRef } from "react";

interface NewTodoType {
  onAddTodo: (text: string) => void;
}

export default function NewTodo(props: NewTodoType) {
  const textRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const newText = textRef.current!.value;
    props.onAddTodo(newText);
  };

  return (
    <form onSubmit={submitHandler} className="flex space-x-2 py-8">
      <div>
        <input
          type="text"
          ref={textRef}
          className="border-2 border-gray-900 px-4 py-1"
        />
      </div>
      <button type="submit" className="border-2 border-gray-900 px-4 py-1">
        ADD TODO
      </button>
    </form>
  );
}
