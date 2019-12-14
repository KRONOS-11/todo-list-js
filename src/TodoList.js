import React from "react";
import Todo from "./Todo";
import "./TodoList.css";
const TodoList = ({
  todoList,
  filter,
  onStatusToggle,
  onRemoveTodo,
  onUpdateTodo
}) => (
  <div className="TodoList">
    {todoList
      .filter(todo => filter === "All" || todo.status.toString() === filter)
      .map(todo => (
        <Todo
          key={Math.random()}
          {...todo}
          onRemoveTodo={onRemoveTodo}
          onStatusToggle={onStatusToggle}
          onUpdateTodo={onUpdateTodo}
        />
      ))}
  </div>
);
export default TodoList;
