import React, { useState, useEffect } from 'react';
import { currentUser } from 'lib/auth';
import {
  fetchMember,
  fetchCommentsOfMember,
  postComment
} from 'lib/api';
import CommentList from 'components/lv4/CommentList';
import CommentForm from 'components/lv4/CommentForm';
import Container from 'components/lv4/Container';

export default function (props) {
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
    <Container>
      <h1>{member.id}. {member.name}</h1>
      <p>Age : {member.age}</p>
      <hr />
      <CommentList comments={comments} />
      <CommentForm
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