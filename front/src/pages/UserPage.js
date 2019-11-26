import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { currentUser } from 'lib/auth';
import { indigo, grey } from '@material-ui/core/colors';
import {
  fetchMember,
  fetchCommentsOfMember,
  postComment,
  fetchUserAndOwnComments
} from 'lib/api';
import CommentList from 'components/lv4/CommentList';
import CommentForm from 'components/lv4/CommentForm';
import Container from 'components/lv4/Container';

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
      <h2>コメント一覧</h2>
      <ul>
        {comments.map(comment => (<li key={comment.id}>{comment.detail}</li>))}
      </ul>
    </Container>
  );
}