import React, { Component } from 'react';
import Debug from './debug';
import {runTestSuite}  from '../reducers/todoReducer2';

class App4 extends Component {
  render() {
    return (
      <div>
        <h1>Test todo reducer 2</h1>
        <Debug result={runTestSuite()} />
      </div>
    );
  }
}

export default App4;
