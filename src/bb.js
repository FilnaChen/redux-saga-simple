import React, { Component } from 'react';
import store from './reducer.js'


class Bb extends Component {
	changeEvent(event){
		store.dispatch({
			type:'change',
			value:event.target.value
		})
	}
	sagaEvent(event){
		store.dispatch({
			type:'test-saga',
			value:event.target.value
		})
	}
  render() {
    return (
      <div className="bb">
       <input type="button" name="change" value="change" onClick={this.changeEvent}/>
       <input type="button" name="test-saga" value="test-saga" onClick={this.sagaEvent}/>
      </div>
    );
  }
}

export default Bb;
