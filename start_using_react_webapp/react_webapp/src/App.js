import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      color: '#000000',
      fontSize: '32px'
    }
    this.update = this.update.bind(this);
  }

  update(e){
    let stringColor = ReactDOM.findDOMNode(this.refs.red.refs.inp).value;
    console.log('stringColor: ', stringColor)
    if (!isNaN(stringColor)){
      stringColor = '#' + parseInt(stringColor, 10).toString(16);
    }
    console.log('#stringColor: ', stringColor)
    this.setState({
      color: stringColor 
    })
  }

  render(){
    return (
      <div>
        <div style={this.state}>Color!</div>
        <Slider 
          ref="red"
          type="range"
          step={1024}
          update={this.update} 
        />
        {this.state.red}
        <br />
      </div>
    );
  }
}

class Slider extends Component {
  render(){
    return (
      <div>
        <input ref="inp" 
          min={this.props.min} 
          max={this.props.max} 
          step={this.props.step} 
          type={this.props.type} 
          onChange={this.props.update} />
      </div>
    );
  }
}

Slider.propTypes = {
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  step: React.PropTypes.number,
  update: React.PropTypes.func.isRequired,
  type: React.PropTypes.oneOf(['range', 'color'])
}

Slider.defaultProps = {
  min: 0,
  max: 16777215,
  step: 1024,
  type: 'color'
}

export default App;
