import React, { useState, useEffect } from 'react';
import { fetchUserAndOwnComments } from 'lib/api';
import Container from 'components/lv4/Container';
import CommentTable from 'components/lv4/CommentTable';

export default function (props) {
  const { id } = props.match.params;
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleGetUser = response => {
      console.log(response);
      setUser(response.user);
      setComments(response.comments);
      setLoading(false);
    }
    setLoading(true);
    fetchUserAndOwnComments(id, handleGetUser);
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }
  
  return (
    <Container>
      <h1>{user.email}</h1>
      <hr />
      <CommentTable comments={comments}/>
    </Container>
  );
}