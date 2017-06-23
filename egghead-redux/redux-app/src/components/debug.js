import React, { Component } from 'react';

class Debug extends Component {
  render() {
    return (
      <pre>
        {this.props.result}
      </pre>
    );
  }
}

export default Debug;
