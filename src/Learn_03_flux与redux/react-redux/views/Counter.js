import React, { Component, PropTypes } from 'react';
import store from '../store/Store.js';
import * as Actions from  '../Actions.js'
import {connect} from 'react-redux'

const buttonStyle = {
    margin: '10px'
}

// 抽出傻瓜组件
function Counter({caption, onClickIncrementButton, onClickDecrementButton, value}){
  return (
    <div>
      <button style={buttonStyle} onClick={onClickIncrementButton}>+</button>
      <button style={buttonStyle} onClick={onClickDecrementButton}>-</button>
      <span>{caption} count: {value}</span>
    </div>
  );
}

function mapState(state, ownProps){
  return {
    value: state[ownProps.caption]
  }
}

function mapDispatch(dispatch, ownProps){
  return {
    onClickIncrementButton: () => {
      dispatch(Actions.increment(ownProps.caption))
    },
    onClickDecrementButton: () => {
      dispatch(Actions.decrement(ownProps.caption))
    }
  }
}

export default connect(mapState, mapDispatch)(Counter)