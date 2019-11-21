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

  let emailErrorIsAppeared = false;
  let passwordErrorIsAppeared = false;

  const handleSecureLogin = () => {
    emailErrorIsAppeared = !isValidEmail(email);
    passwordErrorIsAppeared = !isValidPassword(password);
    handleLogin();
  }

  return (
    <form autoComplete='off'>
      <div className={classes.container}>
        <TextField
          id='standard-basic email'
          label='メールアドレス'
          margin='dense'
          value={email}
          error={emailErrorIsAppeared}
          helperText={emailErrorIsAppeared ? 'メールアドレスに誤りがあります.' : ''}
          onChange={e => handleChangeEmail(e.target.value)}
        />
        <TextField
          id='standard-basic password'
          label='パスワード'
          type='password'
          margin='normal'
          value={password}
          error={passwordErrorIsAppeared}
          onChange={e => handleChangePassword(e.target.value)}
        />
        <Button
          variant='contained'
          color='primary'
          disabled={!(email && password)}
          className={classes.button}
          onClick={handleSecureLogin}
        >
          ログイン
        </Button>
      </div>
    </form>
  );
}