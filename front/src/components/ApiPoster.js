import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default class extends Component {
  constructor() {
    super();
    this.onClickHandler = this.onClickHandler.bind(this);
    this.setState({
      inputText: ''
    });
  }

  onClickHandler = (e) => {
    e.preventDefault();
    const method = 'POST';
    const body = new FormData(document.getElementById('form'));

    return fetch('url', {
      method,
      body
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          inputText: ''
        });
        console.log(responseJson);
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <Button variant="outlined" color="primary" onClick={this.onClickHandler}>
        API-Posting
      </Button>
    );
  }
}