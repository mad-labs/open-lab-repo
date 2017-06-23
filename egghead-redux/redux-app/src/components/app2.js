import React, { Component } from 'react';
import Debug from './debug';
import {runTestSuite}  from '../reducers/multipleCountersReducer';

class App2 extends Component {
  render() {
    return (
      <div>
        <h1>Test add/remove counters</h1>
        <Debug result={runTestSuite()} />
      </div>
    );
  }
}

export default App2;
