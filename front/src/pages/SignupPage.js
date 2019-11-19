import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SignupForm from 'components/lv4/SignupForm';
import { signup } from 'lib/api';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'strech',
    flexDirection: 'column',
    width: '400px'
  },
  button: {
    marginTop: theme.spacing(1),
  },
}));

const setLoggedIn = props => {
  console.log(props);
}

export default function () {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  return (
    <SignupForm
      classes={classes}
      email={email}
      password={password}
      passwordConfirmation={passwordConfirmation}
      handleChangeEmail={setEmail}
      handleChangePassword={setPassword}
      handleChangePassWordConfirmation={setPasswordConfirmation}
      handleSignup={() =>
        signup({
          email,
          password,
          passwordConfirmation,
          setLoggedIn
        })
      }
    />
  );
}