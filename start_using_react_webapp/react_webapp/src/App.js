import React, { Component } from 'react';
import Promise from 'promise';
import './App.css';

class App extends Component {
  render () {
    return (
      <div>
        <Button>Button </Button>
        <hr/>
        <Label>Label </Label>
      </div>
    );
  }
}

 const Button = (props) => <button>{props.children}</button>;

 class Label extends Component {
  render () {
    return (
      <label>{this.props.children} </label>
    );
  }
}



export default App;
