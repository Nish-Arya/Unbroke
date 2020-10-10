import React, { Component } from 'react';
import Income from './Income';
import ExpenseCategories from './ExpenseCategories';
import "./Home.css";
import PieChart from './PieChart';

export class Home extends Component {
    render() {
        return (
          <div className="profile">
            <Income />
            <ExpenseCategories />
            <PieChart />
          </div>
        );
    }
}

export default Home
