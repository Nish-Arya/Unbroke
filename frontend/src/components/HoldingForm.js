import React, { useState } from 'react';
import './HoldingForm.css'

function HoldingForm() {

    const [ticker, setTicker] = useState('');
    const [buyPrice, setBuyPrice] = useState('');
    const [numOfShares, setNumOfShares] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      setTicker('');
      setBuyPrice('');
      setNumOfShares('');
    };

    const isFormValid = () => {
      return ticker && buyPrice && numOfShares;
    };

    return (
      <div className="container">
        <form className="holding-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="ticker"
            placeholder="Ticker"
            value={ticker}
            onChange={(e) => setTicker(e.target.value)}
          />
          <input
            type="number"
            name="buy_price"
            placeholder="Buy Price"
            value={buyPrice}
            onChange={(e) => setBuyPrice(e.target.value)}
          />
          <input
            type="number"
            name="num_of_shares"
            placeholder="Quantity"
            value={numOfShares}
            onChange={(e) => setNumOfShares(e.target.value)}
          />
          <button
            className="holding-form-component"
            type="submit"
            disabled={!isFormValid()}
          >
            Create Holding
          </button>
        </form>
      </div>
    );
};

export default HoldingForm;
