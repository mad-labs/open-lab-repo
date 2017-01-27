import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let date = this.props.time;
    let text = this.props.testo;
    return (
        <div style={this.props.bg}>
          <p>Ciao {date.toString()}</p>
          <h1>No idea {text}</h1>
        </div>
    );
  }
}

export default App;
