import React, { useCallback } from "react";
import "./Todo.css";
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
  const onBlur = useCallback(
    e => {
      e.preventDefault();
      onUpdateTodo(id, e.target.innerText);
      e.target.toggleAttribute("contentEditable");
    },
    [id, onUpdateTodo]
  );
  const onDblCk = useCallback(
    e => {
      if (status === true) return;
      e.preventDefault();
      if (e.target.toggleAttribute("contentEditable")) {
        e.target.addEventListener("keydown", onEnter);
      } else {
        e.target.removeEventListener("keydown", onEnter);
      }
    },
    [onEnter, status]
  );

  return (
    <div className="todo">
      <input
        className="todo-check"
        type="checkbox"
        defaultChecked={status}
        onChange={e => setTimeout(() => onStatusToggle(id), 550)}
      />
      <p className="todo-detail" onDoubleClick={onDblCk} onBlur={onBlur}>
        {todo}
      </p>{" "}
      <button className="todo-delete" onClick={e => onRemoveTodo(id)}>
        &#10008;
      </button>
    </div>
  );
};
export default Todo;
