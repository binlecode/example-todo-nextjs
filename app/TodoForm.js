// by default, Next.js uses Server Components, where the JSX gets compiled to "pure HTML" and sent to the browser.
// a Server Component shouldn't contain client-specific code, for example, hooks such as useState
// therefore, mark the component as client side
"use client"; // This is a client component 👈🏽

import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    addTodo(text);
    setText("");
  };

  return (
    <div className="flex mt-4">
      <form onSubmit={handleSubmit}>
        <input
          className="appearance-none rounded w-full py-2 px-3 mr-4 text-grey-darker"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add new todo..."
        />
      </form>
      {/* <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">Add</button> */}
    </div>
  );
};

export default TodoForm;
