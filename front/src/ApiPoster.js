import React, { Component } from 'react';

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
      <div>
        <p>Hi, (^_^)</p>
      </div>
    );
  }
}