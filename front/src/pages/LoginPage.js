import React, { useState } from 'react';
import {
  Link,
  Redirect,
  useLocation,
  useHistory
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import LoginForm from 'components/lv4/LoginForm'; 
import { login } from 'lib/api';
import { authenticate } from 'lib/auth';

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
  
  let location = useLocation();
  let history = useHistory();

  let { from } = location.state || { from: { pathname: '/' } };

  const handleAuth = ({ auth }) => {
    console.log(auth);
    authenticate(auth);
    setAuth(auth);
    setTimeout(history.replace(from), 100);
  }

  return (
    auth ? (
      <Redirect to='/' />
    ) : (
      <div>
        <LoginForm
          classes={classes}
          email={email}
          password={password}
          handleChangeEmail={setEmail}
          handleChangePassword={setPassword}
          handleLogin={() =>
            login({
              email,
              password,
              handleAuth
            })
          }
        />
        <Link to='/signup'>新規登録はこちら</Link>
      </div>
    )
  );
}