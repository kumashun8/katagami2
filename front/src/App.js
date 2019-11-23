import React, { useState } from 'react';
import { 
  BrowserRouter,
  Switch,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';
import Top from 'pages/Top';
import MemberDetail from 'pages/MemberDetail';
import SignupPage from 'pages/SignupPage';
import LoginPage from 'pages/LoginPage';
import { currentUser, logout } from 'lib/auth';

export default function () {
  const [loggedIn, setLoggedIn] = useState(currentUser());

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
      {loggedIn ? (
        <div>
          <p>ようこそ</p>
          <button onClick={handleLogout}>
            ログアウト
          </button>
        </div>
      ) : (
        <p>ログインしてね</p>
        )
      }
      
      <div>
        <ul>
          <li><NavLink activeStyle={{ color: 'red' }} exact to='/'>Top</NavLink></li>
        </ul>
        <hr />
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
      </div>
    </BrowserRouter>
  );
}
