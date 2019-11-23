import React, { useState, useEffect } from 'react';
import Comment from 'components/lv3/Comment';
import { Grid, Container } from '@material-ui/core';

export default function (props) {
  const {
    comments,
    setLatest
  } = props;
  
  return (
    <div>
      <h2>コメント一覧</h2>
      <Grid>
        {comments.map(comment => (
          <Comment
            key={comment.id}
            id={comment.id}
            baseDetail={comment.detail}
            created_at={comment.created_at}
            userId={comment.user_id}
            setLatest={setLatest}
          />
        ))}
      </Grid>
    </div>
  );
}