import React, { useState, useEffect } from 'react';
import { fetchMember } from 'lib/api';

export default function (props) {
  const { id } = props.match.params;
  const [member,  setMember ] = useState({});
  const [loading, setLoading] = useState(false);
  const [latest,  setLatest ] = useState(true);

  useEffect(() => {
    const handleGetMember = member => {
      setMember(member);
      setLoading(false);
    }
    setLoading(true);
    fetchMember(id, handleGetMember);
  }, [latest]);

  if (loading) {
    return (
      <p>Loading...</p>
    );
  };
  
  return (
    <div>
      <p>ID : {member.id}</p>
      <p>Name : {member.name}</p>
      <p>Age : {member.age}</p>
      <p>Since : {member.created_at}</p>
    </div>
  );
}