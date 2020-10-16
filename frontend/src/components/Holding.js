import React from 'react';

function Holding(props) {
    return (
        <div className='holding-container'>
            {props.holding.ticker}
        </div>
    )
}

export default Holding;
