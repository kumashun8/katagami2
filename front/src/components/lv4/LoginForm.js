import React from 'react';
import {
  Button,
  TextField
} from '@material-ui/core';

export default function (props) {
  const {
    classes,
    email,
    password,
    errors,
    handleChangeEmail,
    handleChangePassword,
    handleClearErrors,
    handleLogin
  } = props;

  return (
    <form autoComplete='off'>
      <div className={classes.container}>
        <TextField
          id='standard-basic email'
          label='メールアドレス'
          margin='dense'
          value={email}
          error={errors.email !== undefined}
          helperText={errors.email}
          onFocus={handleClearErrors}
          onChange={e => handleChangeEmail(e.target.value)}
        />
        <TextField
          id='standard-basic password'
          label='パスワード'
          type='password'
          margin='normal'
          value={password}
          error={errors.password !== undefined}
          helperText={errors.password}
          onFocus={handleClearErrors}
          onChange={e => handleChangePassword(e.target.value)}
        />
        <Button
          variant='contained'
          color='primary'
          disabled={!(email && password)}
          className={classes.button}
          onClick={handleLogin}
        >
          ログイン
        </Button>
      </div>
    </form>
  );
}