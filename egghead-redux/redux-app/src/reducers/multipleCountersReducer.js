import expect from 'expect';
import deepFreeze from 'deep-freeze';

const addCounter = (list) => {
  return [...list, 0];
};

const removeCounter = (list, index) => {
  return [...list.slice(0, index), ...list.slice(index +1)];
};

const incrementCounter = (list, index) => {
  return [...list.slice(0, index), list[index]+1, ...list.slice(index +1)];
};

const decrementCounter = (list, index) => {
  return [...list.slice(0, index), list[index]-1, ...list.slice(index +1)];
};


export const multipleCounter = (list = [], action) => {
    switch (action.type) {
        case 'ADD_COUNTER':
            return addCounter(list);
        case 'REMOVE_COUNTER':
            return removeCounter(list, action.index);
        case 'INCREMENT_COUNTER':
            return incrementCounter(list, action.index);
        case 'DECREMENT_COUNTER':
            return decrementCounter(list, action.index);
        default:
            return list;
    }
};

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];

  deepFreeze(listBefore)

  expect(
    addCounter(listBefore)
  ).toEqual(listAfter);
}

const testRemoveCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 20];

  deepFreeze(listBefore)

  expect(
    removeCounter(listBefore, 1)
  ).toEqual(listAfter);
}

const testIncrementCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 11, 20];

  deepFreeze(listBefore)

  expect(
    incrementCounter(listBefore, 1)
  ).toEqual(listAfter);
}

const testDecrementCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 9, 20];

  deepFreeze(listBefore)

  expect(
    decrementCounter(listBefore, 1)
  ).toEqual(listAfter);
}

export const runTestSuite = () => {

    try {
        testAddCounter();
        testRemoveCounter();
        testIncrementCounter();
        testDecrementCounter();
        return "All test passed";
    }
    catch(err) {
        return "Error!!!";
    }
}