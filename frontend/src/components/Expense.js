import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deleteExpense } from '../store/expenses';
import './Expense.css'

function Expense(props) {

    const userId = useSelector(state => state.auth.id);
    const dispatch = useDispatch();

    const colorDecider = category => {
        if (category === "Housing") return "rgb(255, 99, 132)";
        else if (category === "Transportation") return "rgb(255, 159, 64)";
        else if (category === "Utilities") return "rgb(255, 205, 86)";
        else if (category === "Food") return "rgb(75, 192, 192)";
        else if (category === "Clothing") return "rgb(54, 162, 235)";
        else if (category === "Insurance") return "rgb(153, 102, 255)";
        else if (category === "Miscellaneous") return "rgb(155, 49, 146)";
    }

    const handleDelete = (e) => {
      e.preventDefault();
      dispatch(deleteExpense(props.expense.id, userId));
    }

    return (
      <div
        style={{ background: colorDecider(props.expense.expense_category) }}
        className="expense-container"
      >
        <div>
          {props.expense.description} - {props.expense.amount}
        </div>
        <div className='delete-expense' onClick={handleDelete}> X </div>
      </div>
    );
}

export default Expense;