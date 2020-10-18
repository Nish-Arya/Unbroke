import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deleteHolding } from "../store/holdings";
import './Holding.css'

function Holding(props) {

    const userId = useSelector((state) => state.auth.id);
    const dispatch = useDispatch();

    const handleDelete = (e) => {
      e.preventDefault();
      dispatch(deleteHolding(props.holding.id, userId));
    };

    return (
      <div className="holding-container">
        <div>{props.holding.ticker.toUpperCase()}</div>
        <div>${props.holding.quote.c.toFixed(2)}</div>
        <div>{(((props.holding.quote.c/props.holding.buy_price)-1)*100).toFixed(2)}%</div>
        <div>${props.holding.buy_price.toFixed(2)}</div>
        <div>{props.holding.num_of_shares.toFixed(2)}</div>
        <div>${(props.holding.quote.c*props.holding.num_of_shares).toFixed(2)}</div>
        <div id='holding-delete' onClick={handleDelete}>X</div>
      </div>
    );
}

export default Holding;
