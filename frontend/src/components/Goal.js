import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deleteGoal, updateGoal } from "../store/goals";
import './Goal.css';

function Goal(props) {

    const userId = useSelector((state) => state.auth.id);
    const dispatch = useDispatch();

    const handleDelete = (e) => {
      e.preventDefault();
      dispatch(deleteGoal(props.goal.id, userId));
    };

    const handleComplete = (e) => {
      e.preventDefault();
      dispatch(updateGoal(props.goal.id, userId));
    };

    const colorDecider = (isComplete) => {
      if (!isComplete) return "#21BFA0";
      else return "#606666";
    };

    const monthsLeft = (year, month) => {
      let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];;
      let date = new Date();
      let monthsRemaining = (year - date.getFullYear()) * 12 + (12 - date.getMonth());
      monthsRemaining -= (12 - months.indexOf(month) + 1)
      return monthsRemaining;
    };

    return (
      <div
        className="goal-container"
        style={{ background: colorDecider(props.goal.is_complete) }}
      >
        <div className="goal-buttons-holder">
          <div onClick={handleComplete}>✔</div>
          <div onClick={handleDelete}>X</div>
        </div>
        <div className="goal-info-holder">
          <div>Description - {props.goal.description}</div>
          <div>Amount - ${props.goal.amount}</div>
          <div>
            Date - {props.goal.completion_month} {props.goal.completion_year}
          </div>
          <div>Months Left - {monthsLeft(props.goal.completion_year, props.goal.completion_month)}</div>
          <div>Savings/Month - ${(props.goal.amount / monthsLeft(props.goal.completion_year, props.goal.completion_month)).toFixed(2)}</div>
        </div>
      </div>
    );
}

export default Goal
