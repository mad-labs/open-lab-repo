import React, { Component } from 'react';
import './App.css';

const App = (InnerComponent) => class extends Component {
  constructor () {
    super();
    this.state = {
      count: 0,
      style : {
        color: 'blue'
      }
    };
  }
  update (){
    let currCountVal = this.state.count + 1;
    //currCountVal++;
    let newState = {count : currCountVal, style: {color: 'red'} }
    this.setState(newState);
  }
  render(){
    return(
      <InnerComponent 
        update={this.update.bind(this)} 
        {...this.state} 
        {...this.props} >

          {this.props.children}

      </InnerComponent>
    );
  }
}

class Layout extends Component {
  render () {
    return (
      <div>
        <Button {...this.props}> button children</Button>
        <hr/>
        <Label  {...this.props}>label children</Label>
      </div>
    );
  }
}

const Button = (props) => <button style={props.style} onClick={props.update}>
  {props.children} - {props.count}
</button>;

class Label extends Component {
  render () {
    return (
      <label>{this.props.children} - {this.props.count}</label>
    );
  }
}

//const LabelHOC = HOC(Label);

export default App(Layout);
