import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import ListComponent from './ListComponent'
import ResetComponent from './ResetComponent'
import FormComponent from './FormComponent'

const App = () => (
  <div>
    <ListComponent />
    <FormComponent />
    <ResetComponent />
  </div>
);

export default App;
