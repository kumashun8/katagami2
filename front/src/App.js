import React, { Component } from 'react';
import { 
  BrowserRouter,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import ApiGetter from '~/ApiGetter';

const App = () => (
  <BrowserRouter>
    <>
      <ul>
        <li><NavLink activeStyle={{color: 'red'}} exact to='/'>Home</NavLink></li>
        <li><NavLink activeStyle={{color: 'red'}} to='/about'>About</NavLink></li>
        <li><NavLink activeStyle={{color: 'red'}} to='/friends'>Friends</NavLink></li>
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
    <ApiGetter />
  </>
);

const About = () => (
  <>
    <h2>About</h2>
    <p>フレンズに投票するページです</p>
  </>
);

class Friends extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleVote = this.handleVote.bind(this);
  };

  componentDidMount() {
    FRIENDS.forEach(friend => {
      this.setState({
        ...this.state,
        [friend.id]: 0
      })
    });
  };

  handleVote(id) {
    this.setState({
      [id]: this.state[id] + 1
    });
  };

  render() {
    return (
      <>
        <h2>Friends</h2>
        <Route
          exact path='/friends'
          render={props => <FriendLIst handleVote={this.handleVote} />}
        />
        <Route
          path='/friends/:id'
          render={props => <Friend match={props.match} votes={this.state} />}
        />
      </>
    )
  }

}

const FriendLIst = props => (
  <>
    {FRIENDS.map(friend => (
      <li key={friend.id}>
        <Link to={`/friends/${friend.id}`}>{friend.nameJa}</Link>
        <button onClick={() => props.handleVote(friend.id)}>+</button>
      </li>
    ))}
  </>
);

const Friend = props => {
  const { id } = props.match.params;
  const friend = friendById(id);
  const vote = props.votes[id];

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
      <h1>Vote: {vote}</h1>
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
