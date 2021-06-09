
import './App.css';
import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/navbar';
import Home from './components/pages/Home';
import Login from './components/pages/Login/';
import Leaderboard from './components/pages/Leaderboard';
import Quiz from './components/pages/Quiz';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav />
      <Switch>
       <Route path="/Home" component={Home} />
       <Route path="/Quiz" component={Quiz} />
       <Route path="/Login" component={Login} />
       <Route path="/Leaderboard" component={Leaderboard} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
