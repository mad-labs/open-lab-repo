import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      nome: "Ivan",
      time: new Date().toString()
    } 
  }

  changeState(e){
    this.setState({
      nome: e.target.value
    })
  }
  
  render() {
    let time =  this.state.time;//this.props.time;
    let nome = this.state.nome;//this.props.testo;
    return (
        <div>
          <h1>Ciao {nome}</h1>
          <h2>sono stato creato alle {time}...</h2>
          <Widget change={(e) => this.changeState(e)}/>
        </div>
    );
  }
}

const Widget = (props) => {
  return (
    <input type="text" onChange={props.change} />
  );
} 

export default App;
