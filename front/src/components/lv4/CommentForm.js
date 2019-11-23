import React from 'react';
import { Button, TextField } from '@material-ui/core';

export default function(props) {
  const {
    classes,
    detail,
    handleChangeDetail,
    handlePost
  } = props;

  return (
    <form noValidate autoComplete='off'>
      <div className={classes.container}>
        <TextField
          id='standard-basic'
          label='コメントを入力'
          margin='dense'
          value={detail}
          onChange={e => handleChangeDetail(e.target.value)}
        />
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          onClick={handlePost}
        >
          追加
        </Button>
      </div>
    </form>
  );
};