import React from 'react';
import './Goal.css';

function Goal(props) {

    return (
      <div className="goal-container">
        <div className="goal-buttons-holder">
            <div>✔</div>
            <div>X</div>
        </div>
        <div className="goal-info-holder">
            <div>Description: {props.goal.description}</div>
            <div>Amount: {props.goal.amount}</div>
            <div>Date: {props.goal.completion_month} {props.goal.completion_year}</div>
            <div>Months Left: </div>
        </div>
      </div>
    );
}

export default Goal
