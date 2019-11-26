import React, { useState } from 'react';
import { 
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Top from 'pages/Top';
import MemberDetail from 'pages/MemberDetail';
import SignupPage from 'pages/SignupPage';
import LoginPage from 'pages/LoginPage';
import Header from 'components/lv3/Header';
import { currentUser, logout } from 'lib/auth';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
  wrapper: {
    margin: '120px auto'
  }
}));

export default function () {
  const [loggedIn, setLoggedIn] = useState(currentUser());
  const classes = useStyle();

  const handleLogout = () => {
    logout();
    setLoggedIn(null);
  }

  const PrivateRoute = ({ path, component }) => {
    return (
      loggedIn ? (
        <Route path={path} component={component} />
      ) : (
        <Route
          render={({ location }) => (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location }
              }}
            />
          )}
        />
      )
    );
  }

  return (
    <BrowserRouter>
      <Header handleLogout={handleLogout} />
      <Box className={classes.wrapper}>
        <Switch>
          <Route path='/signup' render={() =>
            <SignupPage
              auth={loggedIn}
              setAuth={setLoggedIn}
            />}
          />
          <Route path='/login' render={() =>
            <LoginPage
              auth={loggedIn}
              setAuth={setLoggedIn}
            />}
          />
          <PrivateRoute path='/members/:id' component={MemberDetail} />
          <PrivateRoute path='/' component={Top} />
        </Switch>
        </Box>
    </BrowserRouter>
  );
}
