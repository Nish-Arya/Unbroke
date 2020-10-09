import React, { Component } from 'react';
import Income from './Income';
import "./Home.css";

export class Home extends Component {
    render() {
        return (
          <div className="profile">
            <Income />
            <div></div>
            <div></div>
          </div>
        );
    }
}

export default Home
