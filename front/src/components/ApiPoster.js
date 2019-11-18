import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';

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

export default function() {
  const classes = useStyles();
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState(' ');
  const handleChangeName = e => {
    setName(e.target.value);
  }
  const handleChangeAge = e => {
    setAge(e.target.value);
  }
  const handlePost = e => {
    e.preventDefault();
    const method = 'POST';
    const body = new FormData();

    body.append('name', name);
    body.append('age', age);

    return fetch('http://localhost:3001/members', {
      method,
      body
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <form noValidate autoComplete='off'>
      <div className={classes.container}>
        <TextField
          id='standard-basic name'
          label='Name'
          margin='dense'
          value={name}
          onChange={handleChangeName}
        />
        <TextField
          id='standard-basic'
          label='Age'
          type='normal'
          margin='normal'
          onChange={handleChangeAge}
        />
        <Button
          variant='outlined'
          color='primary'
          className={classes.button}
          onClick={handlePost}
        >
          API-Posting
        </Button>
      </div>
    </form>
  );
}