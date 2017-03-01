import React from 'react';


class Widget extends React.Component{ 



  render(){
    return (
    <div> 
        <input ref="cosabrutta" type="text" onChange={this.props.change} /> 
    </div>
  )};
}; 

export default Widget;