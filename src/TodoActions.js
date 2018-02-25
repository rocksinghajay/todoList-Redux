export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export const addTodo = todo => ({
  type: ADD_TODO,//type
  todo//payload
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id
});

export const toggleCompleted = id => ({
  type: TOGGLE_COMPLETED,
  id
});

export const clearCompleted = todo => ({ type: CLEAR_COMPLETED });


