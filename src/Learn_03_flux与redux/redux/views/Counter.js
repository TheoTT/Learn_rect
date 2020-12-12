import React, { Component, PropTypes } from 'react';
import store from '../store/Store.js';
import * as Actions from  '../Actions.js'

const buttonStyle = {
    margin: '10px'
}

class Counter extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this)
    this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
    // this.onClickIncrementButton = :this.onClickIncrementButton;
    this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
    this.getOwnState = this.getOwnState.bind(this);
    this.state = this.getOwnState()
  };

  getOwnState(){
    // console.log(store.getState());
    return {
      value: store.getState()[this.props.caption],
      store: store.getState()
    }
  }

  onClickDecrementButton(){
    // this.state.count = this.state.count + 1; // 不能直接修改state
    // this.setState({count: this.state.count - 1});
    // this.updateCount(false)
    console.log('bbbbbbbb -----');
    // Actions.decrement(this.props.caption)
    store.dispatch(Actions.decrement(this.props.caption))
  };

  onClickIncrementButton(){
    // this.setState({count: this.state.count + 1});
    // this.updateCount(true)
    console.log('aaaaaaaaaa ++++');
    // Actions.increment(this.props.caption)
    store.dispatch(Actions.increment(this.props.caption))
  };

  onChange(){
    this.setState(this.getOwnState())
  };

  componentDidMount(){
    store.subscribe(this.onChange)
  };

  // componentWillUnmount(){
  //   store.unsubscribe(this.onChange)
  // };

  // shouldComponentUpdate(nextProps, nextState) {
  //     　return (nextProps.caption !== this.props.caption) ||
  //     　　(nextState.count !== this.state.count);
  // };

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.caption !== this.props.caption) ||
      (nextState.value !== this.state.value);
  }

  render() {
    const {caption} =this.props
    const value = this.state.value
    console.log(store.getState());
    return (
      <div>
        <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
        <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
        <span>{caption} count: {value}</span>
      </div>
    );
  };

  
}


// Counter.defaultProps = {
//   initValue: 0,
//   onUpdate: f => f
// };

export default Counter