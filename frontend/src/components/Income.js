import React, {  useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setExpenses } from "../store/expenses";
import './Income.css'

function Income() {

    const user_id = useSelector(state => state.auth.id)
    const username = useSelector((state) => state.auth.username);
    const monthly_income = useSelector(state => state.auth.monthly_income)
    const expenses = useSelector(state => state.expenses)
    const dispatch = useDispatch();

    useEffect(() => {
      const loadExpenses = async () => {
        const res = await fetch(`/api/expenses/${user_id}`);
        res.data = await res.json();
        if (res.ok) {
          dispatch(setExpenses(res.data.expenses));
        }
      };
      loadExpenses();
    }, [dispatch, user_id]);

    const monthly_expenses = () => {
      let total = 0;
      for (let expense in expenses) {
        total += expenses[expense].amount
      }
      return total;
    }
    
    return (
      <div className="income-column">
        <div className="income-row">
          <h2>Hey, {username}.</h2>
        </div>
        <div className="income-row">
          <h2 className="income-category-title">Monthly Income</h2>
          <h2>{monthly_income}</h2>
        </div>
        <div className="income-row">
          <h2 className="income-category-title">Monthly Expenses</h2>
          <h2>{monthly_expenses()}</h2>
        </div>
        <div className="income-row">
          <h2 className="income-category-title">Monthly Savings</h2>
          <h2>{monthly_income - monthly_expenses()}</h2>
        </div>
      </div>
    );
} 

export default Income
