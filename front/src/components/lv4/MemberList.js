import React from 'react';
import { Link } from 'react-router-dom';

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
        <li key={member.id}>
          <Link to={`/members/${member.id}`}>
            {member.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
