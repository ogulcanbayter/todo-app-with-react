import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((todos) => [...todos, todo]);
    setTodo("");
  };

  const deleteTodo = (i) => {
    setTodos((todos) => todos.filter((todo, index) => index !== i));
  };

  // const sortTodo = (e) => {
  //   e.preventDefault();
  //   todos.sort((a, b) => b.localeCompare(a));
  // };
  const [isTrue, setIsTrue] = useState(true);
  const handleClick = (e) => {
    setIsTrue((current) => !current);
  };

  return (
    <div className="max-w-xl mx-auto py-9">
      <form
        className="flex justify-center items-center gap-2"
        // onSubmit={handleSubmit}
      >
        <input
          className="flex-1 h-8 p-3 rounded border focus:border-blue-800 outline-none  text-sm"
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter todo"
        />
        <button
          onClick={handleSubmit}
          className="rounded w-16 p-2 text-sm bg-blue-500 text-white h-8 flex justify-center items-center"
          disabled={!todo}
          type="submit"
        >
          Add
        </button>
        <button
          onClick={(e) => {
            handleClick();
            e.preventDefault();
            isTrue
              ? setTodos((todos) => todos.sort((a, b) => b.localeCompare(a)))
              : setTodos((todos) => todos.sort((a, b) => a.localeCompare(b)));
          }}
          disabled={!todos.length}
          className="rounded w-16 p-2 text-sm bg-green-700 text-white h-8 flex justify-center items-center"
          type="submit"
        >
          Sırala
        </button>
      </form>

      <ul className="flex flex-col gap-3 mt-10">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-3 rounded bg-blue-100 text-blue-600 text-sm"
          >
            <span className="text-start break-words">{todo}</span>
            <button
              onClick={() => deleteTodo(index)}
              className="h-7 rounded px-3 bg-red-600 text-white"
            >
              Delete
            </button>
          </li>
        ))}
        {!todos.length && (
          <li className="p-4 flex justify-start rounded bg-yellow-100 text-yellow-700">
            There is no todo!
          </li>
        )}
      </ul>
    </div>
  );
};

export default Todo;
