import expect from 'expect';
import deepFreeze from 'deep-freeze';

const toggleTodo = (todo) => {
  return {
    ...todo,
    completed: !todo.completed
  };
};

const toggleTodoById = (list, id) => {
  return list.map((item) => {
    if (item.id === id){
      return toggleTodo(item);
    } else {
      return item;
    }
  });
};

const addTodo = (list, id, text) => {
  return [...list, {
    id: id,
    text: text,
    completed: false
  }];
};

export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return addTodo(state, action.id, action.text);
    case 'TOGGLE_TODO':
      return toggleTodoById(state, action.id);
    default:
      return state;
  }
};

const testAddTodo = () => {
  const stateBefore = [];
  const stateAfter = [{
    id: 0,
    text: 'Learn Redux',
    completed: false
  }];

  deepFreeze(stateBefore)

  expect(
    addTodo(stateBefore, 0, 'Learn Redux')
  ).toEqual(stateAfter);
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
};

const testTodosADD_TODO = () => {
  const stateBefore = [];
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
  }
  const stateAfter = [{
    id: 0,
    text: 'Learn Redux',
    completed: false
  }];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);
};

const testTodosTOGGLE_TODO = () => {
  const stateBefore = [{
    id: 0,
    text: 'Learn Redux',
    completed: false
  },{
    id: 1,
    text: 'Go go go',
    completed: false
  },{
    id: 2,
    text: 'Doing done',
    completed: false
  }];
  
  const action = {
    type: 'TOGGLE_TODO',
    id: 1
  };

  const stateAfter = [{
    id: 0,
    text: 'Learn Redux',
    completed: false
  },{
    id: 1,
    text: 'Go go go',
    completed: true
  },{
    id: 2,
    text: 'Doing done',
    completed: false
  }];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);
};

export const runTestSuite = () => {
  try {
    testAddTodo();
    testToggleTodo();
    testTodosADD_TODO();
    testTodosTOGGLE_TODO();
    return "All test passed 2";
  } catch(err) {
    return err.toString();
  }
};