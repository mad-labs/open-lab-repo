import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render(){
    return(
      <Layout>
        <Button value="A">A</Button>
        <Button value="B">B</Button>
        <Button value="C">C</Button>
      </Layout>
    );
  }
}

class Layout extends Component {

  constructor(){
    super();
    this.state = {
      selected: "None"
    }
  }

  selectItem(selected){
    this.setState({selected});
  }


  render () {
    let fn = child => 
    React.cloneElement(child, {
          onClick: this.selectItem.bind(this, child.props.value)
        }
      );

    let items = React.Children.map(this.props.children, fn);

    return (
      <div>
        <h2> Selected: {this.state.selected}</h2>
        {items}
      </div>
    );
  }
}

const Button = (props) => <button {...props}>{props.children}</button>;


export default App;
