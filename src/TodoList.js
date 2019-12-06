import React from "react";
import Todo from "./Todo";

const TodoList = ({ todoList, filter, onStatusToggle, onRemoveTodo }) => (
  <div className="TodoList">
    {todoList
      .filter(todo => filter === "All" || todo.status.toString() === filter)
      .map(todo => (
        <Todo
          key={Math.random()}
          {...todo}
          onRemoveTodo={onRemoveTodo}
          onStatusToggle={onStatusToggle}
        />
      ))}
  </div>
);
export default TodoList;
