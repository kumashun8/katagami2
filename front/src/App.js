import React from 'react';
import { 
  BrowserRouter,
  Route,
  NavLink
} from 'react-router-dom';
import Top from 'pages/Top';
import MemberDetail from 'pages/MemberDetail';

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><NavLink activeStyle={{color: 'red'}} exact to='/'>Top</NavLink></li>
      </ul>
      <hr />
      <Route exact path='/' component={Top} />
      <Route path='/members/:id' component={MemberDetail} />
    </div>
  </BrowserRouter>
);

export default App;
