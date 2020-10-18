const SET_HOLDINGS = 'holdings/SET_HOLDINGS';

export const setHoldings = holdings => {
    return {
      type: SET_HOLDINGS,
      holdings,
    };
};

export const createHolding = (ticker, buy_price, num_of_shares, userId) => {
  return async (dispatch) => {
    const res = await fetch(`/api/holdings/${userId}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ticker, buy_price, num_of_shares }),
    });
    res.data = await res.json();
    if (res.ok) {
      dispatch(setHoldings(res.data.holdings));
    }
    return res;
  };
};

export const getHoldings = (userId) => {
  return async (dispatch) => {
    const res = await fetch(`/api/holdings/${userId}`);
    res.data = await res.json();
    if (res.ok) {
      dispatch(setHoldings(res.data.holdings));
    }
    return res;
  };
};

export const deleteHolding = (id, userId) => {
  return async (dispatch) => {
    const res = await fetch(`/api/holdings/${userId}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    res.data = await res.json();
    if (res.ok) {
      dispatch(setHoldings(res.data.holdings));
    }
    return res;
  };
};

export default function holdingsReducer(state = {}, action) {
  switch (action.type) {
    case SET_HOLDINGS:
      return action.holdings;
    default:
      return state;
  }
}