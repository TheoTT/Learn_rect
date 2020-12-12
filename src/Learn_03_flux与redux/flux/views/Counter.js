import React, { Component, PropTypes } from 'react';
import CounterStore from '../store/CounterStore';
import * as Actions from '../../redux/Actions.js'

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
    this.state = {
      // count: props.initValue || - 0 //如果未传递值则取0
      // count: props.initValue //设置default value后可以不用判断
      count: CounterStore.getCounterValues()[props.caption]
    };
  };
  render() {
    const {caption} =this.props
    return (
      <div>
        <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
        <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
        <span>{caption} count: {this.state.count}</span>
      </div>
    );
  };
  onClickDecrementButton(){
    // this.state.count = this.state.count + 1; // 不能直接修改state
    // this.setState({count: this.state.count - 1});
    // this.updateCount(false)
    Actions.decrement(this.props.caption)
  };

  onClickIncrementButton(){
    // this.setState({count: this.state.count + 1});
    // this.updateCount(true)
    Actions.increment(this.props.caption)
  };

  componentWillMount() {
    　console.log('enter componentWillMount ' + this.props.caption);
  };

  componentDidMount(){
    CounterStore.addChangeListener(this.onChange)
  };

  componentWillUnmount(){
    CounterStore.removeAllListeners(this.onChange)
  }

  shouldComponentUpdate(nextProps, nextState) {
      　return (nextProps.caption !== this.props.caption) ||
      　　(nextState.count !== this.state.count);
  };

  updateCount(isIncrement){
    const previousValue = this.state.count;
    const newValue = isIncrement ? previousValue + 1 : previousValue -1;
    this.setState({count: newValue})
    this.props.onUpdate(newValue, previousValue)
  };

  onChange(){
    const newCount = CounterStore.getCounterValues()[this.props.caption];
    this.setState({count: newCount})
  }
  
}


Counter.defaultProps = {
  initValue: 0,
  onUpdate: f => f
};

export default Counter