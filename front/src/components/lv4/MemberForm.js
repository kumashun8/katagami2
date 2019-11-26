import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '400px'
  },
  button: {
    marginTop: theme.spacing(1),
  },
}));

export default function(props) {
  const {
    name,
    age,
    handleChangeName,
    handleChangeAge,
    handlePost
  } = props;

  const classes = useStyles();

  return (
    <form noValidate autoComplete='off'>
      <div className={classes.container}>
        <TextField
          id='standard-basic'
          label='Name'
          margin='dense'
          value={name}
          onChange={e => handleChangeName(e.target.value)}
        />
        <TextField
          id='standard-basic'
          label='Age'
          type='number'
          margin='normal'
          value={age}
          onChange={e => handleChangeAge(e.target.value)}
        />
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          onClick={handlePost}
        >
          API-Posting
        </Button>
      </div>
    </form>
  );
};