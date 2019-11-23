import React, { useState, useEffect } from 'react';
import { fetchMember, fetchCommentsOfMember } from 'lib/api';
import CommentList from 'components/lv4/CommentList';

export default function (props) {
  const { id } = props.match.params;
  const [member, setMember] = useState({});
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [latest,  setLatest ] = useState(true);

  useEffect(() => {
    console.log('useEffect1 is called.');
    const handleGetMember = member => {
      setMember(member);
      setLoading(false);
    }
    setLoading(true);
    fetchMember(id, handleGetMember);
  }, [latest]);

  useEffect(() => {
    console.log('useEffect2 is called.');
    const handleGetComments = comments => {
      setComments(comments);
      setLoading(false);
    }
    setLoading(true);
    fetchCommentsOfMember(id, handleGetComments);
  }, [latest]);

  if (loading) {
    return (
      <p>Loading...</p>
    );
  };
  
  return (
    <div>
      <h1>{member.id}. {member.name}</h1>
      <p>Age : {member.age}</p>
      <hr />
      <CommentList comments={comments} />
    </div>
  );
}