import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Search from './pages/Search';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loged: false,
    };
    this.setLoged = this.setLoged.bind(this);
  }

  setLoged(value) {
    this.setState({ loged: value });
  }

  render() {
    const { loged } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {loged ? <Redirect to="/search" /> : <Login setLoged={ this.setLoged } />}
          </Route>
          <Route path="/search" component={ Search } />
          <Route path="/album/:id" component={ Album } />
          <Route path="/favorites" component={ Favorites } />
          <Route exact path="/profile" component={ Profile } />
          <Route path="/profile/edit" component={ ProfileEdit } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

//
