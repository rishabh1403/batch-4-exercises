import React, { Component } from 'react';

import './styles/App.css';

/* eslint-disable react/no-multi-comp, react/no-unused-state */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false,
      input: '',
      mainColor: 'blue',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({ on }) => ({
      on: !on,
    }));
  }

  handleChange(e) {
    this.setState({
      input: e.currentTarget.value,
    });
  }
  render() {
    return (
      <div className="App">
        <React.Fragment>
          <h1 className={this.state.mainColor}>Welcome to React</h1>
        </React.Fragment>
        <React.Fragment>
          <p className="button-state">{this.state.on ? 'Yes!' : 'No!'}</p>
          <button onClick={this.handleClick}>Click Me</button>
        </React.Fragment>
        <React.Fragment>
          <h2>{this.state.input}</h2>
          <label htmlFor="text-change">Change Text In Heading</label>
          <input type="text" name="text-change" value={this.state.input} onChange={this.handleChange} />
        </React.Fragment>
      </div>
    );
  }
}

App.prototype.handleStrings = str => Boolean(str);

export class Link extends Component {
  render() {
    return this.props.hide ? null : <a href={this.props.address} >Go To Link</a>;
  }
}

export default App;
