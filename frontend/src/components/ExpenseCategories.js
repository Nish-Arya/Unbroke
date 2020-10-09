import React from 'react'
import { useSelector } from 'react-redux';
import './ExpenseCategories.css'

function ExpenseCategories() {

    const expenses = useSelector((state) => state.expenses);

    const totalCalculator = (category) => {
        let total = 0;
        for (let expense in expenses) {
            if (expenses[expense].expense_category === category) {
                total += expenses[expense].amount;
            }
        }
        return total;
    }

    return (
      <div className="expense-category-column">
        <h2>Expense Categories</h2>
        <div className="expense-category-row">
          <h3 className="expense-category-title">Housing</h3>
          <h3>{totalCalculator("Housing")}</h3>
        </div>
        <div className="expense-category-row">
          <h3 className="expense-category-title">Transportation</h3>
          <h3>{totalCalculator("Transportation")}</h3>
        </div>
        <div className="expense-category-row">
          <h3 className="expense-category-title">Utilities</h3>
          <h3>{totalCalculator("Utilities")}</h3>
        </div>
        <div className="expense-category-row">
          <h3 className="expense-category-title">Food</h3>
          <h3>{totalCalculator("Food")}</h3>
        </div>
        <div className="expense-category-row">
          <h3 className="expense-category-title">Clothing</h3>
          <h3>{totalCalculator("Clothing")}</h3>
        </div>
        <div className="expense-category-row">
          <h3 className="expense-category-title">Insurance</h3>
          <h3>{totalCalculator("Insurance")}</h3>
        </div>
        <div className="expense-category-row">
          <h3 className="expense-category-title">Miscellaneous</h3>
          <h3>{totalCalculator("Miscellaneous")}</h3>
        </div>
      </div>
    );
}

export default ExpenseCategories
