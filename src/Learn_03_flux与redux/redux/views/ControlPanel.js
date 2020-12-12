import React, { Component, PropTypes } from 'react';
import Counter from './Counter.js'
import Summary from '../../redux/views/Summary.js'

class ControlPanel extends Component {
  render () {
    return (
      <div>
        <Counter caption="First" />
        <Counter caption="Second" />
        <Counter caption="Third" />
        <hr/>
        <Summary />
      </div>
    );
  }
}

export default ControlPanel;
