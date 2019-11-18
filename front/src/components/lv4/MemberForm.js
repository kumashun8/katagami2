import React from 'react';
import { Button, TextField } from '@material-ui/core';

export default function(props) {
  const {
    classes,
    handleChangeName,
    handleChangeAge,
    handlePost
  } = props;

  return (
    <form noValidate autoComplete='off'>
      <div className={classes.container}>
        <TextField
          id='standard-basic name'
          label='Name'
          margin='dense'
          onChange={e => handleChangeName(e.target.value)}
        />
        <TextField
          id='standard-basic'
          label='Age'
          type='number'
          margin='normal'
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