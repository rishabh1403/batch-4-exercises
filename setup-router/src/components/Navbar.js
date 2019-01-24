import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeName: 'home',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name) {
    this.setState({
      activeName: name,
    });
  }

  render() {
    return (
      <ul className="nav">
        <li className={this.state.activeName === 'home' ? 'active' : ''}>
          <Link onClick={() => this.handleClick('home')} to="/">Home</Link>
        </li>
        <li className={this.state.activeName === 'about' ? 'active' : ''}>
          <Link onClick={() => this.handleClick('about')} to="/about">About Us</Link>
        </li>
        <li className={this.state.activeName === 'contact' ? 'active' : ''}>
          <Link onClick={() => this.handleClick('contact')} to="/contact">Contact</Link >
        </li>
      </ul >
    );
  }
}
