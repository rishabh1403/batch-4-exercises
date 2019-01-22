import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

/* eslint-disable react/no-unused-state */
const GithubRepos = ({ repos }) => {
  return (
    <ul>
      {repos.map(repo => <li key={repo}>{repo}</li>)}
    </ul>
  );
}

GithubRepos.propTypes = {
  repos: PropTypes.array
};

/* eslint-disable react/no-multi-comp */
class UsernameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      repos: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchRepos("rishabh1403")
  }

  fetchRepos(username) {
    axios.get(`https://api.github.com/users/${username}/repos`)
      .then(data => {
        const repoNames = data.data.map(el => el.name);
        this.setState({
          repos: repoNames,
        });
      }).catch(err => {
        console.log(err);
      })
  }

  handleChange(e) {
    this.setState({
      username: e.target.value,
    });
  }

  handleClick() {
    this.fetchRepos(this.state.username);
  }

  render() {
    return (
      <div>
        <input
          value={this.state.username}
          onChange={this.handleChange}
          type="text"
          name="username"
        />
        <button
          onClick={this.handleClick}
        >
          Get Repos
        </button>
        <GithubRepos repos={this.state.repos} />
      </div>
    );
  }
}

export default UsernameForm;
