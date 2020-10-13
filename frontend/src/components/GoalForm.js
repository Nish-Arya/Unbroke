import React, { useState } from "react";
import './GoalForm.css';

function GoalForm() {

    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [year, setYear] = useState(2021);
    const [month, setMonth] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
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
            className='goal-form-component'
            onChange={(e) => setMonth(e.target.value)}
          >
            <option value={1}>January</option>
            <option value={2}>February</option>
            <option value={3}>March</option>
            <option value={4}>April</option>
            <option value={5}>May</option>
            <option value={6}>June</option>
            <option value={7}>July</option>
            <option value={8}>August</option>
            <option value={9}>September</option>
            <option value={10}>October</option>
            <option value={11}>November</option>
            <option value={12}>December</option>
          </select>
          <button className='goal-form-component' type="submit" disabled={!isFormValid()}>
            Create Goal
          </button>
        </form>
      </div>
    );
}

export default GoalForm
