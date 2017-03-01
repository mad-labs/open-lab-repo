import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Widget from './Widget';


class App extends Component {
  constructor(){
    super();
    this.state={
      nome: "Ivan"
    } 
  }

  componentWillMount(){
    console.log("monterà");
    this.setState({
      time: new Date().toString()
    });
  }

  componentDidMount(){
    console.log("montato");
    this.incTime = setInterval(this.changeTime.bind(this), 500);
  }

  changeTime(){
    this.setState({
      time: new Date().toString()
    });
  }
  
  changeState(){
    this.setState({
      nome: this.wi.refs.cosabrutta.value
    });
  }
  
  render() {
    console.log("renderizzato");
   return (
     <div>
          <Widget ref={component => this.wi = component} change={this.changeState.bind(this)} />
          <p>nome: {this.state.nome}</p>
          <p>time: {this.state.time}</p>
     </div>
    );
  }

  componentWillUnmount(){
    console.log("smonterà");
    clearInterval(this.incTime);
  }

}





class Heart extends React.Component{
  mount(){
    ReactDOM.render(<App />, document.getElementById('a'));
  }

  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('a'));
  }
  render(){
    return (
      <div>
        <button onClick={this.mount.bind(this)}>
          <span>&hearts;</span>
        </button>
        <button onClick={this.unmount.bind(this)}>
          <span>&spades;</span>
        </button>
        <div id="a"/>
      </div>
    );
  }
}

export default Heart;
