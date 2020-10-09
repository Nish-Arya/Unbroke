import React, { Component } from 'react';
import Income from './Income';
import ExpenseCategories from './ExpenseCategories';
import "./Home.css";

export class Home extends Component {
    render() {
        return (
          <div className="profile">
            <Income />
            <ExpenseCategories />
            <div></div>
          </div>
        );
    }
}

export default Home
