import React, { Component } from 'react';
import Income from './Income';
import ExpenseCategories from './ExpenseCategories';
import "./Home.css";
import PieChart from './PieChart';
import ExpenseForm from './ExpenseForm';

export class Home extends Component {
    render() {
        return (
          <div className="expenses-page">
            <div className='expenses-form-container'>
              <ExpenseForm />
            </div>
            <div className="profile">
              <Income />
              <ExpenseCategories className="expenses-module" />
              <PieChart />
            </div>
          </div>
        );
    }
}

export default Home
