import React, { useState } from "react";
import "./AddTodo.css";
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
          if (todo !== "" && e.key === "Enter" && !e.shiftKey) {
            onAdd(todo);
            setTodo("");
          }
        }}
      />
      <button
        className="add-todo"
        disabled={todo === ""}
        onClick={e => {
          onAdd(todo);
          setTodo("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
};
export default AddTodo;
