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
      <div className="grow">
        <input
          type="text"
          ref={textRef}
          placeholder="Enter your todo here..."
          className="border-2 border-gray-900 px-4 py-1 w-full"
        />
      </div>
      <button
        type="submit"
        className="bg-green-500 text-white hover:bg-green-600 px-4 py-1"
      >
        ADD TODO
      </button>
    </form>
  );
}
