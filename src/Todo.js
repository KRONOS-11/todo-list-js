import React from "react";

const Todo = ({ todo, status, onStatusToggle, id, onRemoveTodo }) => (
  <div className="todo" id={id}>
    <label>
      <input
        type="checkbox"
        checked={status}
        onChange={e => onStatusToggle(id)}
      />
      {todo} : {status.toString()}
    </label>
    <button onClick={e => onRemoveTodo(id)}>Remove</button>
  </div>
);
export default Todo;
