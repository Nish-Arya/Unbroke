import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Goals from './components/Goals';
import Holdings from './components/Holdings';


function App() {
  console.log("____Rendering app_____")
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/signup">
                <Signup />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/">
                  <nav>
                      <ul>
                          <li><NavLink to="/" activeclass="active">Home</NavLink></li>
                          <li><NavLink to="/goals" activeclass="active">Goals</NavLink></li>
                          <li><NavLink to="/stock-holdings" activeclass="active">Stock Holdings</NavLink></li>
                      </ul>
                  </nav>
                  <Switch>
                      <Route path="/goals">
                          <Goals />
                      </Route>
                      <Route path="/stock-holdings">
                          <Holdings />
                      </Route>
                      <Route path="/">
                          <Home />
                      </Route>
                  </Switch>
            </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
