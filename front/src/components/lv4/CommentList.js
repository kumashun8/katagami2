import React, { useState, useEffect } from 'react';
import Comment from 'components/lv3/Comment';

export default function (props) {
  const { comments } = props;
  
  return (
    <div>
      <h2>コメント一覧</h2>
      <ul>
        {comments.map(comment => (
          <Comment
            detail={comment.detail}
            create_at={comment.create_at}
          />
        ))}
      </ul>
    </div>
  );
}