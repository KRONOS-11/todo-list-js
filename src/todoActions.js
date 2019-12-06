export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export const addTodo = (todo, id) => {
  console.log("lol", id, todo);
  return { type: ADD_TODO, todo, id };
};

export const toggleTodo = id => ({ type: TOGGLE_TODO, id });

export const removeTodo = id => ({ type: REMOVE_TODO, id });

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
});
