import React, { Component, PropTypes } from 'react';
import store from '../store/Store.js';
import {connect} from 'react-redux'

function Summary({sum}){
  return (
    <div>
      Sum : {sum}
    </div>
  )
}

function mapState(state){
  let sum = 0
  for (const key in state){
    if (state.hasOwnProperty(key)){
      sum += state[key]
    }
  }
  return {value: sum}
}

export default connect(mapState)(Summary)