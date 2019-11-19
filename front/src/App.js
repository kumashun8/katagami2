import React from 'react';
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

const App = () => (
  <BrowserRouter>
    <AuthButton />
    <div>
      <ul>
      <li><NavLink activeStyle={{ color: 'red' }} exact to='/'>Top</NavLink></li>
        <li><NavLink activeStyle={{ color: 'red' }} exact to='/public'>Public</NavLink></li>
        <li><NavLink activeStyle={{ color: 'red' }} exact to='/private'>Private</NavLink></li>
      </ul>
      <hr />
      <Switch>
        <Route path='/public' component={PublicPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/members/:id' component={MemberDetail} />
        <PrivateRoute path='/private'>
          <Top />
        </PrivateRoute>
      </Switch>
    </div>
  </BrowserRouter>
);

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push('/'));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: 'login',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function PublicPage() {
  return <h3>Public</h3>;
}

function PrivatePage() {
  return <h3>Private</h3>;
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: '/' } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must lgo in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  )
}

export default App;
