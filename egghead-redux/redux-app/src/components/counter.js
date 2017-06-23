import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <div>
        <div>counter: {this.props.counterVal}</div>
        <button onClick={this.props.onIncrement} >+</button>
        <button onClick={this.props.onDecrement} >-</button>
      </div>
    );
  }
}

export default Counter;
