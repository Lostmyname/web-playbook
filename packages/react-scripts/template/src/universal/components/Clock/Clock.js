// Did the clock render without JS enabled? Sever side rendering is working.
// Is the clock moving? Client side rendering is working.

/* eslint-disable react/prefer-es6-class */
import React, { Component, PropTypes } from 'react';

var clockOptions = {
  timeZone: 'UTC',
  timeZoneName: 'short',
  hour12: false,
  formatMatcher: 'basic',
};

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <p>It is {this.state.date.toLocaleTimeString('en-UK', clockOptions)}.</p>
    );
  }
}

Clock.propTypes = {
  children: PropTypes.node
};

export default Clock;
