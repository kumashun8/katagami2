import React, { Component } from 'react';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state={
      loading: false
    };
  }

  componentDidMount(){
    return fetch('https://api.github.com/users/defunkt')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          loading: true,
          data: responseJson,
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render() {
    if (this.state.loading) {
      return(
        <div className="App-header">
          <h1>{this.state.data.login}</h1>
          <p>{this.state.data.name}, {this.state.data.public_repos}repos</p>
        </div>
      );
    }else{
      return (
        <div className="App-header">
          <p>Loading...</p>
        </div>
      );
    }
  }
}