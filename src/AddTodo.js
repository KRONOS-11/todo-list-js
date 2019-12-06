import React, { useState } from "react";

const AddTodo = ({ onAdd }) => {
  const [todo, setTodo] = useState("");
  return (
    <div className="AddTodo">
      <input
        type="text"
        autoFocus
        value={todo}
        onChange={e => setTodo(e.target.value)}
        name="todo"
        onKeyPress={e => {
          if (todo !== "" && e.key === "Enter") {
            onAdd(todo);
            setTodo("");
          }
        }}
      />
      <button
        disabled={todo === ""}
        onClick={e => {
          onAdd(todo);
          setTodo("");
        }}
      >
        Add +
      </button>
    </div>
  );
};
export default AddTodo;
