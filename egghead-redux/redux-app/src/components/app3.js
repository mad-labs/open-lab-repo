import React, { Component } from 'react';
import Debug from './debug';
import {runTestSuite}  from '../reducers/todoReducer';

class App3 extends Component {
  render() {
    return (
      <div>
        <h1>Test todo reducer</h1>
        <Debug result={runTestSuite()} />
      </div>
    );
  }
}

export default App3;
