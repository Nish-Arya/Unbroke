import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createExpense } from '../store/expenses';
import './ExpenseForm.css'

function ExpenseForm() {

    const userId = useSelector((state) => state.auth.id);

    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [categoryId, setCategoryId] = useState(1);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createExpense(description, parseInt(amount), parseInt(categoryId), userId));
        setDescription("");
        setAmount("");
    };

    const isFormValid = () => {
      return description && amount && categoryId;
    };

    return (
      <div className="form-container">
        <form className="expense-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            name="amount"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <select id="browsers" value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
            <option value={1}>Housing</option>
            <option value={2}>Transportation</option>
            <option value={3}>Utilities</option>
            <option value={4}>Food</option>
            <option value={5}>Clothing</option>
            <option value={6}>Insurance</option>
            <option value={7}>Miscellaneous</option>
          </select>
          <button type="submit" disabled={!isFormValid()}>
            Create Expense
          </button>
        </form>
      </div>
    );
}

export default ExpenseForm;