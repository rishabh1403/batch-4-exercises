import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import './styles/App.css';
import ColorList from './components/ColorList';
import Color from './components/Color';
import NewColor from './components/NewColor';

const getSelectedColor = (state) => {
  return (props) => {
    const data = state.find(el => el.name === props.match.params.name);
    return <Color color={data} />;
  };
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        {
          name: 'red',
          hex: '#FF0000',
        },
        {
          name: 'green',
          hex: '#00FF00',
        },
        {
          name: 'blue',
          hex: '#0000FF',
        },
      ],
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(newColor) {
    this.setState({ colors: [newColor, ...this.state.colors] });
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route exact path="/colors" render={props => <ColorList {...props} colors={this.state.colors} />} />
            <Route exact path="/colors/new" render={props => <NewColor {...props} addColor={this.handleAdd} colors={this.state.colors} />} />
            <Route exact path="/colors/:name" component={getSelectedColor(this.state.colors)} />
            <Route exact path="/" render={() => <Redirect to="/colors" />} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
