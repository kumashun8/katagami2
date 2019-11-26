import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { currentUser } from 'lib/auth';
import { Container } from '@material-ui/core';
import { indigo, grey } from '@material-ui/core/colors';
import {
  fetchMember,
  fetchCommentsOfMember,
  postComment
} from 'lib/api';
import CommentList from 'components/lv4/CommentList';
import CommentForm from 'components/lv4/CommentForm';

const useStyles = makeStyles(theme => ({
  wrapper: {
    backgroundColor: grey[50],
    color: indigo[900],
    marginTop: theme.spacing(4),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(4)
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '400px'
  },
  button: {
    marginTop: theme.spacing(1),
  },
}));

export default function (props) {
  const classes = useStyles();
  const { id } = props.match.params;
  const [member,     setMember] = useState({});
  const [comments, setComments] = useState([]);
  const [comment,   setComment] = useState('');
  const [loading,   setLoading] = useState(false);
  const [latest,     setLatest] = useState(true);

  useEffect(() => {
    const handleGetMember = member => {
      setMember(member);
      setLoading(false);
    }
    setLoading(true);
    fetchMember(id, handleGetMember);
  }, [latest]);

  useEffect(() => {
    // console.log(`useEffect! latest: ${latest}`);
    const handleGetComments = comments => {
      setComments(comments);
      setLoading(false);
    }
    setLoading(true);
    fetchCommentsOfMember(id, handleGetComments);
  }, [latest]);

  useEffect(() => {
    setComment('');
  }, [latest]);

  if (loading) {
    return (
      <p>Loading...</p>
    );
  };
  
  return (
    <Container className={classes.wrapper}>
      <h1>{member.id}. {member.name}</h1>
      <p>Age : {member.age}</p>
      <hr />
      <CommentList comments={comments} />
      <CommentForm
        classes={classes}
        detail={comment}
        handleChangeDetail={setComment}
        handlePost={() =>
          postComment({
            detail: comment,
            user: currentUser(),
            member: id,
            setLatest: setLatest
          })
        }
      />
    </Container>
  );
}