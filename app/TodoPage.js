// by default, Next.js uses Server Components, where the JSX gets compiled to "pure HTML" and sent to the browser.
// a Server Component shouldn't contain client-specific code, for example, hooks such as useState
// therefore, mark the component as client side
"use client"; // This is a client component

import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: todos.length + 1, text }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
};

export default TodoPage;
