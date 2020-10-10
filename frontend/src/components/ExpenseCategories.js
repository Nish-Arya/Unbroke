import React from 'react'
import { useSelector } from 'react-redux';
import Expense from './Expense';
import './ExpenseCategories.css'

function ExpenseCategories() {

    const expenses = useSelector((state) => state.expenses);
    
    return (
      <div className='expenses-container'>
        <h3 className='expenses-title'>Your Expenses</h3>
        <div className="expenses-column">
          {Object.values(expenses).map(expense => {
            return <Expense expense={expense} key={expense.id} />
          })}
        </div>
      </div>
    );
}

export default ExpenseCategories
