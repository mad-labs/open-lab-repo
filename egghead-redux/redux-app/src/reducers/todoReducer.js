import expect from 'expect';
import deepFreeze from 'deep-freeze';

const toggleTodo = (todo) => {
  return {
    ...todo,
    completed: !todo.completed
  };
};

export const todos = (todo = [], action) => {
  switch (action.type) {
    case 'TOGGLE_TODO':
      return toggleTodo(todo, action.id);
    default:
      return todo;
  }
};

const testToggleTodo = () => {
  const todoBefore = {
    id: 0,
    text: 'Learn Redux',
    completed: false
  };
  const todoAfter = {
    id: 0,
    text: 'Learn Redux',
    completed: true
  };;

  deepFreeze(todoBefore)

  expect(
    toggleTodo(todoBefore)
  ).toEqual(todoAfter);
}

export const runTestSuite = () => {
  try {
    testToggleTodo();
    return "All test passed";
  } catch(err) {
    return err.toString();
  }
}