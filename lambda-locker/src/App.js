import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom'

import Nav from './components/Nav.js'
import Login from './components/authentication/Login.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Nav />
        <h1>This is a react app...</h1>
        <main>
          <Route path='/login' component={Login} />
        </main>
      </div>
    </div>
  );
}

export default App;
