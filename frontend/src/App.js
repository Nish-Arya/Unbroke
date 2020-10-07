import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";
import HomePage from './pages/HomePage'
import Signup from './components/Signup';
import Login from './components/Login';
import { setUser } from "./store/auth";


function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadUser = async () => {
      const res = await fetch("/api/users/");
      if (res.ok) {
        res.data = await res.json();
        dispatch(setUser(res.data.user));
      }
      setLoading(false);
    };
    loadUser();
  }, [dispatch]);

  if (loading) return null;

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
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
