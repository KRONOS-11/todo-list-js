import React from "react";
import "./App.css";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import {
  addTodo,
  toggleTodo,
  removeTodo,
  setVisibilityFilter,
  updateTodo
} from "./todoActions";
import { connect } from "react-redux";
function App({
  todoList,
  filter,
  onStatusToggle,
  onRemoveTodo,
  onAddTodo,
  onFilterChange,
  onUpdateTodo
}) {
  return (
    <>
      <TodoList
        todoList={todoList}
        filter={filter}
        onStatusToggle={onStatusToggle}
        onRemoveTodo={onRemoveTodo}
        onUpdateTodo={onUpdateTodo}
      />
      <AddTodo onAdd={onAddTodo} />
      <select onChange={e => onFilterChange(e.target.value)}>
        <option value={"All"}>All</option>
        <option value={true}>Completed</option>
        <option value={false}>Incomplete</option>
      </select>
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
    },
    onFilterChange(filter) {
      dispatch(setVisibilityFilter(filter));
    },
    onUpdateTodo(id, todo) {
      dispatch(updateTodo(id, todo));
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
