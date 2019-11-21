import React, { useState } from 'react';
import {
  Redirect,
  useLocation,
  useHistory
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import SignupForm from 'components/lv4/SignupForm';
import { signup } from 'lib/api';
import { authenticate, isLoggedIn } from 'lib/auth';

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

export default function ({ auth, setAuth }) {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  
  let location = useLocation();
  let history = useHistory();

  let { from } = location.state || { from: { pathname: '/' } };

  const handleAuth = ({ auth }) => {
    authenticate(auth);
    setAuth(auth);
    setTimeout(history.replace(from), 100);
  }

  return (
    auth ? (
      <Redirect to='/' />
    ) : (
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
            handleAuth
          })
        }
      />
    )
  );
}