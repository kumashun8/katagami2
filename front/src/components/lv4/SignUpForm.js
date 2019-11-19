import React from 'react';
import { Button, TextField } from '@material-ui/core';

export default function (props) {
  const {
    classes,
    email,
    password,
    passwordConfirmation,
    handleChangeEmail,
    handleChangePassword,
    handleChangePassWordConfirmation,
    handleSignup
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
          label='パスワード (6文字以上)'
          type='password'
          margin='normal'
          value={password}
          onChange={e => handleChangePassword(e.target.value)}
        />
        <TextField
          id='standard-basic'
          label='パスワード (再入力)'
          type='password'
          margin='normal'
          value={passwordConfirmation}
          onChange={e => handleChangePassWordConfirmation(e.target.value)}
        />
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          onClick={handleSignup}
        >
          新規登録
        </Button>
      </div>
    </form>
  );
}