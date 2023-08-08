import React from "react";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div className="flex mb-4 items-center" key={todo.id}>
          <p className="w-full text-grey-darkest">{todo.text}</p>
          <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">
            Done
          </button>
          <button
            className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red"
            onClick={() => deleteTodo(todo.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
