import React from 'react';
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { randomColor } from 'lib/color';

const useStyle = makeStyles({
  icon: {
    width: 32,
    height: 32,
    fontSize: 16,
    paddingTop: 2,
    margin: '0 auto',
    backgroundColor: props => props.color[500],
    color: props => props.color[50]
  },
});

export default function ({ email, id }) {
  const classes = useStyle({color: randomColor(email)});

  return (
    <Avatar className={classes.icon}>
      {email[0].toUpperCase()}
    </Avatar>
  );
}