import React, { useCallback } from "react";

const Todo = ({
  todo,
  status,
  onStatusToggle,
  id,
  onRemoveTodo,
  onUpdateTodo
}) => {
  const onEnter = useCallback(
    e => {
      if (e.key === "Enter") {
        e.preventDefault();
        onUpdateTodo(id, e.target.innerText);
        e.target.toggleAttribute("contentEditable");
      }
    },
    [id, onUpdateTodo]
  );
  const onDblCk = useCallback(
    e => {
      e.preventDefault();
      if (e.target.toggleAttribute("contentEditable")) {
        e.target.addEventListener("keydown", onEnter);
      } else {
        e.target.removeEventListener("keydown", onEnter);
      }
    },
    [onEnter]
  );

  return (
    <div className="todo">
      <input
        type="checkbox"
        checked={status}
        onChange={e => onStatusToggle(id)}
      />
      <span onDoubleClick={onDblCk}>{todo}</span>{" "}
      <span>: {status.toString()}</span>
      <button onClick={e => onRemoveTodo(id)}>Remove</button>
    </div>
  );
};
export default Todo;
