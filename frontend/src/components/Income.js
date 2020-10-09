import React from 'react';
import {  useSelector } from "react-redux";
import './Income.css'

function Income() {

    const monthly_income = useSelector(state => state.auth.monthly_income)
    const expenses = useSelector(state => state.expenses)
    
    return (
      <div className="income-column">
        <div className="income-row">
          <h3>Monthly Income</h3>
          <h3>{monthly_income}</h3>
        </div>
        <div className="income-row">
          <h3>Monthly Expenses</h3>
          <h3>{monthly_income}</h3>
        </div>
        <div className="income-row">
          <h3>Monthly Savings</h3>
          <h3>{monthly_income}</h3>
        </div>
      </div>
    );
} 

export default Income
