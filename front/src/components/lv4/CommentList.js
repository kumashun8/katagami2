import React from 'react';
import Comment from 'components/lv3/Comment';
import { Grid } from '@material-ui/core';

export default function ({ comments }) {
  return (
    <div>
      <h2>コメント一覧</h2>
      <Grid>
        {comments.map(comment => (
          <Comment
            key={comment.id}
            id={comment.id}
            baseDetail={comment.detail}
            userId={comment.user_id}
          />
        ))}
      </Grid>
    </div>
  );
}