import React, { useState, useEffect } from 'react';
import { 
  BrowserRouter,
  Switch,
  Route,
  NavLink,
  Redirect,
  useHistory,
  useLocation
} from 'react-router-dom';
import Top from 'pages/Top';
import MemberDetail from 'pages/MemberDetail';
import SignupPage from 'pages/SignupPage';
import LoginPage from 'pages/LoginPage';
import { isLoggedIn, logout } from 'lib/auth';

export default function () {
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());

  const handleLogout = () => {
    logout();
    setLoggedIn(null);
  }

  const PrivateRoute = ({ children, ...rest }) => {
    console.log(loggedIn);
    return (
      <Route
        {...rest}
        render={({ location }) =>
        loggedIn ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/signup",
                state: { from: location }
              }}
            />
          )
        }
      />
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
          <Route path='/members/:id' component={MemberDetail} />
          <PrivateRoute path='/'>
            <Top />
          </PrivateRoute>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
