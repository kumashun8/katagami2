import React, { Component } from 'react';
import { 
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/friends'>Friends</Link></li>
      </ul>

      <hr />

      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/friends' component={Friends} />
    </>
  </BrowserRouter>
);

const Home = () => (
  <>
    <h2>About</h2>
    <p>Welcome to ようこそ</p>
  </>
);

const About = () => (
  <>
    <h2>About</h2>
    <p>フレンズに投票するページです</p>
  </>
);

const Friends = () => (
  <>
    <h2>Friends</h2>
    <p>ここにフレンズのリストを書きます</p>
  </>
);

export default App
