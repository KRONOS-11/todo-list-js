import React, { useEffect } from "react";
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
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify({ data: todoList }));
  }, [todoList]);
  return (
    <div className="app">
      <div class="filter">
        <input
          id="All"
          type="radio"
          checked={"All" === filter}
          onChange={e => onFilterChange(e.target.value)}
          value={"All"}
          name="filter"
        />
        <label for="All">All</label>
        <input
          id="true"
          type="radio"
          checked={"true" === filter.toString()}
          onChange={e => onFilterChange(e.target.value)}
          value={true}
          name="filter"
        />
        <label for="true">Completed</label>
        <input
          id="false"
          type="radio"
          checked={"false" === filter.toString()}
          onChange={e => onFilterChange(e.target.value)}
          value={false}
          name="filter"
        />
        <label for="false">Incomplete</label>
      </div>
      <TodoList
        todoList={todoList}
        filter={filter}
        onStatusToggle={onStatusToggle}
        onRemoveTodo={onRemoveTodo}
        onUpdateTodo={onUpdateTodo}
      />
      <AddTodo onAdd={onAddTodo} />
    </div>
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
