import React, { useState, useCallback, useEffect } from "react";
import "./App.css";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function App() {
  const [todoList, setTodoList] = useState([
    { todo: "this is sample", status: false, id: Date.now() }
  ]);
  useEffect(() => {
    console.log(todoList);
  }, [todoList]);
  const onStatusToggle = useCallback(
    id => {
      const tempTodoList = [...todoList];
      const todoIndex = tempTodoList.findIndex(e => e.id === id);
      tempTodoList[todoIndex].status = !tempTodoList[todoIndex].status;
      setTodoList(tempTodoList);
    },
    [todoList]
  );
  const [filter, setFilter] = useState("all");
  const addTodo = useCallback(
    todo => {
      setTodoList([...todoList, { todo: todo, status: false, id: Date.now() }]);
    },
    [todoList]
  );
  const onRemoveTodo = useCallback(id => {
    const tempTodoList = [...todoList];
    const todoIndex = tempTodoList.findIndex(e => e.id === id);
    tempTodoList.splice(todoIndex, 1);
    setTodoList(tempTodoList);
  });
  return (
    <>
      <TodoList
        todoList={todoList}
        filter={filter}
        onStatusToggle={onStatusToggle}
        onRemoveTodo={onRemoveTodo}
      />
      <AddTodo onAdd={addTodo} />
    </>
  );
}

export default App;
