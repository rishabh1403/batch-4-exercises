import React, { Component } from 'react';

let timer = null;
class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      start: true
    };
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  startTimer() {
    timer = setInterval(() => {
      this.setState({
        timer: this.state.timer + 1,
      });
    }, 1);
    this.setState({
      start: false,
    });
  }

  stopTimer() {
    clearInterval(timer);
    this.setState({
      start: true,
    });
  }

  resetTimer() {
    this.stopTimer();
    this.setState({
      timer: 0,
    });
  }

  componentWillUnmount() {
    this.resetTimer();
  }

  render() {
    return (
      <div>
        <p>Stop Watch</p>
        <p>{this.state.timer}</p>
        {this.state.start ?
          <button onClick={this.startTimer}>Start</button> :
          <button onClick={this.stopTimer}>Stop</button>
        }
        <button onClick={this.resetTimer}>Reset</button>
      </div>
    );
  }
}

export default StopWatch;
