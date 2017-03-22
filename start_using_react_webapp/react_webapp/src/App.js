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

    this.state.items.map(function(item,i){
      item.filmsIds = [];
      item.films.map(function(film, j){
        fetch(film+"?format=json")
        .then(response => response.json())
        .then(function(response){
            console.log("movie: "+film+" id: "+response.episode_id);
            item.filmsIds.push(response.episode_id);
        });
        return film;
      });
      return item;
    }
    );  
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("nextState: "+nextState.initialized+ " currentState: "+this.state.initialized);
    return nextState.initialized;
  }

  filter(e){
    this.setState({filter: e.target.value});
  }

  chooseMovie(e){
    this.setState({movieId: e.target.value});
  }

  render() {
    console.log("renderizzato")
    let items = this.state.items;

    if(this.state.filter){
      items = items.filter(
        item => item.name.toLowerCase().includes(this.state.filter.toLowerCase())
      )
    }
    console.log("Chosen movie" +this.state.movieId)
    if(this.state.movieId){
      items = items.filter(
        item => {
          let found = false;
          item.filmsIds.map(function(film, i){
              if(film === this.state.movieId){
                found = true;
              }
            return film;
          })
          return found;
        }
      )
    }
    if(this.state.initialized){
      return (
        <div>
          <input type="text" onChange={this.filter.bind(this)}/>
          <input type="radio" name="movie" value="2" onChange={this.chooseMovie.bind(this)}/><span>Episode II</span>
          <input type="radio" name="movie" value="3" onChange={this.chooseMovie.bind(this)}/><span>Episode III</span>
          <input type="radio" name="movie" value="4" onChange={this.chooseMovie.bind(this)}/><span>Episode IV</span>
          <input type="radio" name="movie" value="5" onChange={this.chooseMovie.bind(this)}/><span>Episode V</span>
          <input type="radio" name="movie" value="6" onChange={this.chooseMovie.bind(this)}/><span>Episode VI</span>
          <input type="radio" name="movie" value="7" onChange={this.chooseMovie.bind(this)}/><span>Episode VII</span>
          <ul>
            { 
              items.map(function(item, i){
                console.log(items.filmsIds);
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
