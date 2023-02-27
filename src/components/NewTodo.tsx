export default function NewTodo() {
  return (
    <form className="flex space-x-2 py-8">
      <div>
        <input type="text" className="border-2 border-gray-900 px-4 py-1" />
      </div>
      <button type="submit" className="border-2 border-gray-900 px-4 py-1">
        ADD TODO
      </button>
    </form>
  );
}
