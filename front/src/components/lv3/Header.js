import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { indigo } from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({
  container: {
    width: '100vw',
    height: 80,
    position: 'fixed',
    margin: 0,
    top: 0,
    backgroundColor: indigo[500],
    color: indigo[50]
  },
}));

export default function (props) {
  const {
    handleLogout
  } = props;

  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.container}>
      <Grid item xs={8}>
        <Link to='/'>Sample App</Link>
      </Grid>
      <Grid item xs={4} onClick={handleLogout}>b</Grid>
    </Grid>
  );
}