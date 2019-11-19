import React from 'react';
import { Button, TextField } from '@material-ui/core';

export default function(props) {
  const {
    classes,
    name,
    age,
    handleChangeName,
    handleChangeAge,
    handlePost
  } = props;

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