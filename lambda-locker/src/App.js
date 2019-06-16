import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom'

import Nav from './components/Nav.js'
import Login from './components/authentication/Login.js'
import Register from './components/authentication/Register.js'
import Home from './components/home/Home.js'

import './css/App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Nav />

        <main>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </main>

      </div>
    </div>
  );
}

export default App;
