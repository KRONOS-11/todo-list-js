import React from "react";
import "./App.css";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { addTodo, toggleTodo, removeTodo } from "./todoActions";
import { connect } from "react-redux";
function App({ todoList, filter, onStatusToggle, onRemoveTodo, onAddTodo }) {
  return (
    <>
      <TodoList
        todoList={todoList}
        filter={filter}
        onStatusToggle={onStatusToggle}
        onRemoveTodo={onRemoveTodo}
      />
      <AddTodo onAdd={onAddTodo} />
    </>
  );
}
function mapStateToProps({ todos, visibilityFilter }) {
  return {
    todoList: todos,
    filter: visibilityFilter
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onRemoveTodo(id) {
      dispatch(removeTodo(id));
    },
    onStatusToggle(id) {
      dispatch(toggleTodo(id));
    },
    onAddTodo(todo, id = Date.now()) {
      dispatch(addTodo(todo, id));
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
