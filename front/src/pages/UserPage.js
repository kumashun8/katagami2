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

export default function (props) {
  const { id } = props.match.params;
  
  return (
    <h1>{id}のページ</h1>
  );
}