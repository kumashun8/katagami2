import React from 'react';
import { Button, TextField } from '@material-ui/core';

export default function (props) {
  const {
    classes,
    email,
    password,
    handleChangeEmail,
    handleChangePassword,
    handleLogin
  } = props;

  return (
    <form autoComplete='off'>
      <div className={classes.container}>
        <TextField
          id='standard-basic'
          label='メールアドレス'
          margin='dense'
          value={email}
          onChange={e => handleChangeEmail(e.target.value)}
        />
        <TextField
          id='standard-basic'
          label='パスワード'
          type='number'
          margin='normal'
          value={password}
          onChange={e => handleChangePassword(e.target.value)}
        />
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          onClick={handleLogin}
        >
          ログイン
        </Button>
      </div>
    </form>
  );
}