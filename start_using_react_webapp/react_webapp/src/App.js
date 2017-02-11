import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Widget from './Widget';
import Tasto from './Tasto';


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
          <h1>Buonasera <Tasto nome={nome}><Heart/></Tasto></h1>
          <h2>sono stato creato alle {time}...</h2>
          <Widget change={(e) => this.changeState(e)}/>
          <Widget change={(e) => this.changeState(e)}/>
          <Widget change={(e) => this.changeState(e)}/>
        </div>
    );
  }
}





class Heart extends React.Component{
  render(){
    return <span>&hearts;</span>;
  }
}

export default App;
