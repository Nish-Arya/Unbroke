import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import UserList from './components/UsersList';


function App() {
  console.log("____Rendering app_____")
  return (
    <BrowserRouter>
        <nav>
            <ul>
                <li><NavLink to="/" activeclass="active">Home</NavLink></li>
                <li><NavLink to="/users" activeclass="active">Users</NavLink></li>
            </ul>
        </nav>
        <Switch>
            <Route path="/users">
                <UserList />
            </Route>

            <Route path="/">
                <h1>My Home Page</h1>
            </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
