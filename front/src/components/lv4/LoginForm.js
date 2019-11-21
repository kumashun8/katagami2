import React from 'react';
import {
  Button,
  TextField
} from '@material-ui/core';
import {
  isValidEmail,
  isValidPassword
} from 'lib/validation';

export default function (props) {
  const {
    classes,
    email,
    password,
    handleChangeEmail,
    handleChangePassword,
    handleLogin
  } = props;

  const isAbleToLogin = isValidEmail(email) && isValidPassword(password);

  return (
    <form autoComplete='off'>
      <div className={classes.container}>
        <TextField
          error={false}
          id='standard-basic email'
          label='メールアドレス'
          helperText='必須項目です'
          margin='dense'
          value={email}
          onChange={e => handleChangeEmail(e.target.value)}
        />
        <TextField
          id='standard-basic password'
          label='パスワード'
          type='password'
          margin='normal'
          value={password}
          onChange={e => handleChangePassword(e.target.value)}
        />
        <Button
          variant='contained'
          color='primary'
          disabled={!isAbleToLogin}
          className={classes.button}
          onClick={handleLogin}
        >
          ログイン
        </Button>
      </div>
    </form>
  );
}