import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deleteGoal } from "../store/goals";
import './Goal.css';

function Goal(props) {

    const userId = useSelector((state) => state.auth.id);
    const dispatch = useDispatch();

    const handleDelete = (e) => {
      e.preventDefault();
      dispatch(deleteGoal(props.goal.id, userId));
    };

    return (
      <div className="goal-container">
        <div className="goal-buttons-holder">
          <div>✔</div>
          <div onClick={handleDelete}>X</div>
        </div>
        <div className="goal-info-holder">
          <div>Description: {props.goal.description}</div>
          <div>Amount: {props.goal.amount}</div>
          <div>
            Date: {props.goal.completion_month} {props.goal.completion_year}
          </div>
          <div>Months Left: </div>
          <div>Saving / Month: </div>
        </div>
      </div>
    );
}

export default Goal
