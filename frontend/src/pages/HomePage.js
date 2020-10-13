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
import logo from "../images/un-broke-logo.jpg";
import "./HomePage.css"

function HomePage() {


    const isLoggedIn = useSelector((state) => !!state.auth.id);
    const dispatch = useDispatch();

    const handleClick = () => {
      dispatch(logout());
    };

    if (!isLoggedIn) return <Redirect to="/login" />;

    return (
      <div className="root">
        <div className="home-logo-holder">
          <img className="home-logo" src={logo} alt="Unbroke logo" />
        </div>
        <div className="navbar-container">
          <div className="navbar">
            <NavLink
              to="/"
              className="navbar-component"
              activeclass="active"
              exact
            >
              EXPENSES
            </NavLink>
            <NavLink
              to="/goals"
              className="navbar-component"
              activeclass="active"
            >
              GOALS
            </NavLink>
            <NavLink
              to="/stock-holdings"
              className="navbar-component"
              activeclass="active"
            >
              STOCK HOLDINGS
            </NavLink>
            <button
              id="navbar-button"
              className="navbar-component"
              onClick={handleClick}
              type="submit"
            >
              LOGOUT
            </button>
          </div>
        </div>
        <Switch className="content">
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
        <div className="footer-container">
          <div className="footer">
            <div>
              <a href="https://github.com/Nish-Arya/Unbroke/wiki">ABOUT</a>
            </div>
            <div>
              <a href="https://github.com/Nish-Arya">GITHUB</a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/nish-arya-53727a16a/">LINKEDIN</a>
            </div>
            <h5>© 2020 UNBROKE BUDGETING SOLUTIONS</h5>
          </div>
        </div>
      </div>
    );
}

export default HomePage
