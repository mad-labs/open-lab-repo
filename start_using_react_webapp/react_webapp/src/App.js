import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      initialized : false,
      items : []
    } 
  }

  

  componentWillMount(){
    fetch("http://swapi.co/api/starships/?format=json")
      .then(response => response.json())
      .then(function(response){
         this.setState({
            items : response.results,
            initialized : true
          });
        }.bind(this)
      );
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("nextState: "+nextState.initialized+ " currentState: "+this.state.initialized);
    return nextState.initialized;
  }

  render() {
    console.log("renderizzato")
    if(this.state.initialized){
      return (
        <div>
          <ul>
            { 
              this.state.items.map(function(item, i){
                return (<li key={item.name}>{i+1} {item.name}</li>);
              })
            }
          </ul>
        </div>
      );
    }else{
      return <p> Attendere... </p>
    }
    
  }

 
}

export default App;
