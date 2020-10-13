import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createGoal } from "../store/goals";
import './GoalForm.css';

function GoalForm() {

  const userId = useSelector((state) => state.auth.id);

    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [year, setYear] = useState(2021);
    const [month, setMonth] = useState("January");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createGoal(description, parseInt(amount), parseInt(year), month, userId));
        setDescription("");
        setAmount("");
        setYear(2021);
    };

    const isFormValid = () => {
      return description && amount && year;
    };

    return (
      <div className="goal-form-container">
        <form className="goal-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            type="number"
            name="year"
            placeholder="Completion Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          <select
            id="months"
            value={month}
            className="goal-form-component"
            onChange={(e) => setMonth(e.target.value)}
          >
            <option value={"January"}>January</option>
            <option value={"February"}>February</option>
            <option value={"March"}>March</option>
            <option value={"April"}>April</option>
            <option value={"May"}>May</option>
            <option value={"June"}>June</option>
            <option value={"July"}>July</option>
            <option value={"August"}>August</option>
            <option value={"September"}>September</option>
            <option value={"October"}>October</option>
            <option value={"November"}>November</option>
            <option value={"December"}>December</option>
          </select>
          <button
            className="goal-form-component"
            type="submit"
            disabled={!isFormValid()}
          >
            Create Goal
          </button>
        </form>
      </div>
    );
}

export default GoalForm
