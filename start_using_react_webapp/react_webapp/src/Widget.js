import React from 'react';

const Widget = (props) => { 
  return (
    <div> 
        <input  type="text" onChange={props.change} /> 
    </div>
  );
}; 

export default Widget;