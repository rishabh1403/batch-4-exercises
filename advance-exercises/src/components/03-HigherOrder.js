import React from 'react';
import PropTypes from 'prop-types';

function withMouse(Component) {
  return class A extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        mouse: {
          x: 0,
          y: 0,
        },
      };
      this.handleChage = this.handleChage.bind(this);
    }

    handleChage(e) {
      this.setState({
        mouse: {
          x: e.clientX,
          y: e.clientY,
        },
      });
    }
    render() {
      return (
        <Component handleChage={this.handleChage} mouse={this.state.mouse} />
      )
    }
  }
}

class App extends React.Component {
  render() {
    const { mouse, handleChage } = this.props;

    return (
      <div onMouseMove={handleChage} className="container">
        {mouse ? (
          <h1>
            The mouse position is ({mouse.x}, {mouse.y})
          </h1>
        ) : (
            <h1>We don&#39;t know the mouse position yet :(</h1>
          )}
      </div>
    );
  }
}

App.propTypes = {
  mouse: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
  handleChage: PropTypes.func.isRequired,
};

const AppWithMouse = withMouse(App);

export default AppWithMouse;
