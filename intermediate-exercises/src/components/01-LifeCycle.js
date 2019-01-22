import React from 'react';

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Pesto' };
  }

  componentDidMount() {
    console.log("I mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log({ prevProps, prevState });
    console.log("Updated!");
  }

  componentWillUnmount() {
    console.log("Good night, Pesto!");
  }

  render() {
    return (
      <React.Fragment>
        <p>Good morning, {this.state.name}!</p>
        <button onClick={() => this.forceUpdate()} type="button">Update</button>
      </React.Fragment>
    );
  }
}

export default LifeCycle;
