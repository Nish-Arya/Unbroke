import React from 'react'
import {
  Switch,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Home from "../components/Home";
import Goals from "../components/Goals";
import Holdings from "../components/Holdings";
import { logout } from "../store/auth";

function HomePage() {


    const isLoggedIn = useSelector((state) => !!state.auth.id);
    const dispatch = useDispatch();

    const handleClick = () => {
      dispatch(logout());
    };

    if (!isLoggedIn) return <Redirect to="/signup" />;

    return (
        <>
        <nav>
            <ul>
              <li>
                <NavLink to="/" activeclass="active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/goals" activeclass="active">
                  Goals
                </NavLink>
              </li>
              <li>
                <NavLink to="/stock-holdings" activeclass="active">
                  Stock Holdings
                </NavLink>
              </li>
            </ul>
            <button onClick={handleClick} type="submit">
              Log Out
            </button>
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
          </>
    )
}

export default HomePage
