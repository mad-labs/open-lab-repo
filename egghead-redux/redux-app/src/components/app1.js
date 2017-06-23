import React, { Component } from 'react';
import { createStore } from 'redux';
import counterReducer from '../reducers/counterReducer';
import Counter from './counter';

const store = createStore(counterReducer);
const dispatchIncrement = () => {
  console.log("dispatching increment...");
  store.dispatch({
    type: 'INCREMENT'
  })
};

const dispatchDecrement = () => {
  console.log("dispatching decrement...");
  store.dispatch({
    type: 'DECREMENT'
  })
};

class App1 extends Component {
  constructor(){
    super();
    this.state = {
      counter: 0
    }
    store.subscribe(() => {
      this.setState({
        counter: store.getState()
      })
    });
  }
  render() {
    console.log("state:", store.getState());
    return (
      <div>
        <h1>A Redux app!</h1>
        <Counter 
          counterVal={this.state.counter} 
          onIncrement={dispatchIncrement} 
          onDecrement={dispatchDecrement}>
        </Counter>
      </div>
    );
  }
}

export default App1;
