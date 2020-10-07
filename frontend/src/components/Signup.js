import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { signup } from "../store/auth";
import logo from "../images/un-broke-logo.png";
import "./Signup.css";

function Signup() {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [monthly_income, setMonthlyIncome] = useState("");
    const isLoggedIn = useSelector((state) => !!state.auth.id);
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
      e.preventDefault();
      dispatch(signup(username, email, password, monthly_income));
    };

    const isFormValid = () => {
      return email && username && password && monthly_income;
    };

    if (isLoggedIn) return <Redirect to="/" />;

    return (
      <div className="signup-page">
        <div className="signup-form-container">
          <img
            className="signup-logo"
            src={logo}
            alt="Unbroke logo"
          />
          <form className="signup-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="text"
              name="monthly_income"
              placeholder="Monthly Income (After taxes)"
              value={monthly_income}
              onChange={(e) => setMonthlyIncome(e.target.value)}
            />
            <button type="submit" disabled={!isFormValid()}>
              Sign Up
            </button>
          </form>
          <div className="login-link-container">
            Already on un-broke?{" "}
            <Link className="login-link" to="/login">
              Log In
            </Link>
          </div>
        </div>
      </div>
    );
}

export default Signup
