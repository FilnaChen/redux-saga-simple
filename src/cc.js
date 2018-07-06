import React, { Component } from 'react';
import store from './reducer.js'

class Cc extends Component {
	constructor(...args){
		super(...args);
		this.state={
			res:"original"
		}
		store.subscribe(()=>{
			this.setState({
				res:store.getState().res
			})
		})
	}
  render() {
    return (
      <div className="cc">
       {this.state.res}
      </div>
    );
  }
}

export default Cc;
