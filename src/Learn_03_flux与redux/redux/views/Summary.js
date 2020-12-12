import React, { Component, PropTypes } from 'react';
import store from '../store/Store.js';

class Summary extends Component {
  constructor(props) {
    super(props);
    this.onUpdate = this.onUpdate.bind(this)
    this.getOwnState = this.getOwnState.bind(this)
      // count: props.initValue || - 0 //如果未传递值则取0
      // count: props.initValue //设置default value后可以不用判断
    this.state = this.getOwnState()
  };

  getOwnState(){
    const state = store.getState()
    let sum = 0
    console.log(`------------------------------${state}--------------`)
    for (const key in state){
      if (state.hasOwnProperty(key)){
        sum +=state[key]
      }
    }
    console.log(state);
    console.log(`------------------------------${state}--------------`)
    return {sum: sum}
  };

  onUpdate(){
    this.setState(this.getOwnState())
  }

  componentDidMount() {
    store.subscribe(this.onUpdate);
  }
  
  // componentWillUnmount(){
  //   store.unsubscribe(this.onUpdate)
  // };

  render() {
    return (
      <div>
          Sum : {this.state.sum}
      </div>
    );
  };

}

export default Summary