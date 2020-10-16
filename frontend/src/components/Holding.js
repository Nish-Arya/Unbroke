import React from 'react';
import './Holding.css'

function Holding(props) {
    return (
      <div className="holding-container">
        <div>{props.holding.ticker.toUpperCase()}</div>
        <div>${props.holding.quote.c.toFixed(2)}</div>
        <div>{(((props.holding.quote.c/props.holding.buy_price)-1)*100).toFixed(2)}%</div>
        <div>${props.holding.buy_price.toFixed(2)}</div>
        <div>{props.holding.num_of_shares.toFixed(2)}</div>
        <div>${(props.holding.quote.c*props.holding.num_of_shares).toFixed(2)}</div>
      </div>
    );
}

export default Holding;
