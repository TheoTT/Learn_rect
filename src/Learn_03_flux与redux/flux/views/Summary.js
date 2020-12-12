import React, { Component, PropTypes } from 'react';
import SummaryStore from '../store/SummaryStore';
import * as Actions from '../Actions.js'

class Summary extends Component {
  constructor(props) {
    super(props);
    this.onUpdate = this.onUpdate.bind(this)
      // count: props.initValue || - 0 //如果未传递值则取0
      // count: props.initValue //设置default value后可以不用判断
    this.state = {
      sum: SummaryStore.getSummary()
    };
  };

  render() {
    const {caption} =this.props
    return (
      <div>
          Sum : {this.state.sum}
      </div>
    );
  };

  onUpdate(){
    this.setState({sum: SummaryStore.getSummary()})
  };

  // componentDidMount(){
  //     SummaryStore.addListener(this.onUpdate)
  // };

  componentWillUnmount(){
      SummaryStore.removeAllListeners(this.onUpdate)
  }
}

export default Summary