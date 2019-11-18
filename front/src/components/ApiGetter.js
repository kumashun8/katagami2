import React, { useState, useEffect } from 'react';
import { fetchMembers } from 'lib/api';

export default function() {
  const [loading, setLoading] = useState(false);
  const [members, setMembers] = useState([]);
  const [memberCount, setMemberCount] = useState(0);

  useEffect(() => {
    const handleGetMembers = members => {
      setMembers(members);
      setLoading(true);
    }
    fetchMembers(handleGetMembers);
  }, [memberCount]);

  if (loading) {
    return (
      <ul className="App-header">
        {members.map(member => (
          <li key={member.id}>{member.name}, {member.age}</li>
        ))}
      </ul>
    );
  }

  return (
    <p>Loading...</p>
  );
}
