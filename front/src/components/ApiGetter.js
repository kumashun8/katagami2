import React, { Component } from 'react';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state={
      loading: false
    };
  }

  componentDidMount(){
    return fetch('http://localhost:3001/members')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
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
        <ul className="App-header">
          {this.state.data.map(member => (
            <li key={member.id}>{member.name}, {member.age}</li>
          ))}
        </ul>
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