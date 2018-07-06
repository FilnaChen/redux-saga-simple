import React, { Component } from 'react';
import Bb from './bb.js'
import Cc from './cc.js'

class Aa extends Component {
  render() {
    return (
      <div className="aa">
        <Bb />
        <Cc />
      </div>
    );
  }
}

export default Aa;
