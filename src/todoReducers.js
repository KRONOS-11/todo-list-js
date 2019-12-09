import { combineReducers } from "redux";
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  SET_VISIBILITY_FILTER,
  UPDATE_TODO
} from "./todoActions";
const todos = (
  state = JSON.parse(
    localStorage.getItem("todos") || JSON.stringify({ data: [] })
  ).data,
  action
) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          todo: action.todo,
          status: false
        }
      ];
    case UPDATE_TODO:
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo;
        }
        return {
          ...todo,
          todo: action.todo
        };
      });
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo;
        }
        return {
          ...todo,
          status: !todo.status
        };
      });
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};
const visibilityFilter = (state = "All", action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};
export default combineReducers({ todos, visibilityFilter });
