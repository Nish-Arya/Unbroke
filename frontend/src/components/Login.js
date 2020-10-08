import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import {  fadeIn } from "react-animations";
import logo from "../un-broke-logo.png";
import { login } from "../store/auth";
import "./Login.css";

const Bounce = styled.div`animation: 5s ${keyframes`${fadeIn}`} infinite`;

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const isLoggedIn = useSelector((state) => !!state.auth.id);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(login(email, password));
    };

    const handleDemoUser = (e) => {
      dispatch(login("soonmi@aa.io", "password"));
    };

    const isFormValid = () => {
      return email && password;
    };

    if (isLoggedIn) return <Redirect to="/" />;

    return (
      <div className="login-page">
        <Bounce className="login-animation">
          <h2>
            Ready to save money? Welcome to un-broke!
          </h2>
        </Bounce>
        <div className="login-form-container">
          <img className="login-logo" src={logo} alt="Unbroke logo" />
          <form className="login-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" disabled={!isFormValid()}>
              Log In
            </button>
          </form>
          <button className="demo-button" onClick={handleDemoUser}>
            Log In As Demo User
          </button>
          <div className="signup-link-container">
            New to un-broke?{" "}
            <Link className="signup-link" to="/signup">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    );
}

export default Login

