import React from 'react';

export default function(props) {
  const { loading, members } = props;

  if (loading) {
    return (
      <p>Loading...</p>
    );
  }
  return (
    <ul className="App-header">
      {members.map(member => (
        <li key={member.id}>{member.name}, {member.age}</li>
      ))}
    </ul>
  );
}
