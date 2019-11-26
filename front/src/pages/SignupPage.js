import React, { useState, useEffect } from 'react';
import {
  Link,
  Redirect,
  useLocation,
  useHistory
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import SignupForm from 'components/lv4/SignupForm';
import { signup } from 'lib/api';
import { authenticate } from 'lib/auth';
import Container from 'components/lv4/Container';

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
  const [errors, setErrors] = useState({});
  
  let location = useLocation();
  let history = useHistory();

  let { from } = location.state || { from: { pathname: '/' } };

  const handleAuth = ({ auth, email, errors }) => {
    if (auth) {
      authenticate(auth, email);
      setAuth(auth);
    } else {
      setErrors(errors);
    }
  }

  useEffect(() => {
    if (auth) {
      setTimeout(history.replace(from), 100);
    }
  });

  return (
    auth ? (
      <Redirect to='/' />
    ) : (
        <Container>
          <h1>新規登録</h1>
          <hr />
          <SignupForm
            classes={classes}
            email={email}
            password={password}
            passwordConfirmation={passwordConfirmation}
            errors={errors}
            handleChangeEmail={setEmail}
            handleChangePassword={setPassword}
            handleChangePassWordConfirmation={setPasswordConfirmation}
            handleClearErrors={() => setErrors({})}
            handleSignup={() =>
              signup({
                email,
                password,
                passwordConfirmation,
                handleAuth
              })
            }
          />
          <Link to='/login'>ログインはこちら</Link>
        </Container>
      )
  );
}