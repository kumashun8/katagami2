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
    <Route exact path='/friends' component={FriendLIst} />
    <Route path='/friends/:id' component={Friend} />
  </>
);

const FriendLIst = () => (
  <>
    {FRIENDS.map(friend => (
      <li key={friend.id}>
        <Link to={`/friends/${friend.id}`}>{friend.nameJa}</Link>
      </li>
    ))}
  </>
);

const Friend = props => {
  const { id } = props.match.params;
  const friend = friendById(id);

  if (typeof friend === 'undefined') {
    return (
      <>
        <p>Friend with id '{id}' does not exist.</p>
      </>
    );
  }

  const containerStyle = {
    border: '1px gray solid',
    display: 'inline-block',
    padding: 10
  };
  const contentStyle = { margin: 0 };

  return (
    <>
      <div style={containerStyle}>
        <p style={contentStyle}>{friend.family}</p>
        <h1 style={contentStyle}>{friend.nameJa}</h1>
        <p style={contentStyle}>{friend.nameEn}</p>
      </div>
    </>
  );

};

const FRIENDS = [
  {
    id: 'serval',
    nameJa: 'サーバル',
    nameEn: 'Serval Cat',
    family: 'ネコ目ネコ科ネコ属'
  },
  {
    id: 'reccoon',
    nameJa: 'アライグマ',
    nameEn: 'Common raccoon',
    family: 'ネコ目アライグマ科アライグマ属'
  },
  {
    id: 'fennec',
    nameJa: 'フェネック',
    nameEn: 'Fennec',
    family: 'ネコ目イヌ科キツネ属'
  }
];

const friendById = id => FRIENDS.find(friend => friend.id === id);

export default App;
