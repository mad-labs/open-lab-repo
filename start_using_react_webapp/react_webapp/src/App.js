import React, { Component } from 'react';
import Promise from 'promise';
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
      .then((starshipsData) => {
         let filmPromises = [];
         let starships = starshipsData.results;
         for (let starship of starships){
            for (let film of starship.films) {
              filmPromises.push(fetch(film + '?format=json')
                .then(response => response.json())
                .then(function(film){
                  starship.episode_ids = starship.episode_ids || [];
                  starship.episode_ids.push(film.episode_id);
                })
              );
            }
         }
         console.log(filmPromises);
         Promise.all(filmPromises).then(() => {
           console.log(starships);
            this.setState({
              items : starships,
              initialized : true
            });
           });
        }
      );
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("nextState: "+nextState.initialized+ " currentState: "+this.state.initialized);
    return nextState.initialized;
  }

  filter(e){
    console.log("filter with e.target.value:=["+e.target.value+"]");
    this.setState({filter: e.target.value});
  }

  chooseMovie(e){
    console.log("chooseMovie with e.target.value:=["+e.target.value+"]");
    this.setState({movieId: parseInt(e.target.value)});
  }

  render() {
    console.log("render()...")
    let items = this.state.items;

    console.log(this.state);
    console.log('Chosen this.state.filter:=[' + this.state.filter+ ']');
    console.log('Chosen this.state.movieId:=[' + this.state.movieId + ']');

    items = items.filter(
      item => !this.state.filter || item.name.toLowerCase().includes(this.state.filter.toLowerCase())
    ).filter(
      item => !this.state.movieId || item.episode_ids.find(episode_id => episode_id === this.state.movieId)
    );
   
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
                console.log(item.episode_ids);
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
