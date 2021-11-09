import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import  PostDetails from './components/PostDetails/postDetails.jsx';
import Home from './components/Home/home.js';
import Navbar from './components/NavBar/navbar.js';
import Auth from './components/Auth/auth.js';

const App = () => {
  const user = JSON.parse(localStorage.getItem('Profile'));

  return (
    <BrowserRouter>
     <Container maxWidth="xl">
        <Navbar />
        <Switch>
          <Route path="/" exact component={ () => <Redirect to='/posts' />} />
          <Route path="/posts" exact component={Home} />
          <Route path="/posts/search" exact component={Home} />
          <Route path='/posts/:id' component={PostDetails} />
          <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to='/posts' />)} />
        </Switch>
      </Container>
  </BrowserRouter>
  )
};

export default App;

