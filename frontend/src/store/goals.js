const SET_GOALS = "expenses/SET_GOALS";

export const setGoals = (goals) => {
  return {
    type: SET_GOALS,
    goals,
  };
};

export const createGoal = (description, amount, completion_year, completion_month, userId) => {
  return async (dispatch) => {
    const res = await fetch(`/api/goals/${userId}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description, amount, completion_year, completion_month}),
    });
    res.data = await res.json();
    if (res.ok) {
      dispatch(setGoals(res.data.goals));
    }
    return res;
  };
};

export const getGoals = (userId) => {
  return async (dispatch) => {
    const res = await fetch(`/api/goals/${userId}`);
    res.data = await res.json();
    if (res.ok) {
      dispatch(setGoals(res.data.goals));
    }
    return res;
  };
};

export const deleteGoal = (id, userId) => {
  return async (dispatch) => {
    const res = await fetch(`/api/goals/${userId}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    res.data = await res.json();
    if (res.ok) {
      dispatch(setGoals(res.data.goals));
    }
    return res;
  };
};

export const updateGoal = (id, userId) => {
  return async (dispatch) => {
    const res = await fetch(`/api/goals/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    res.data = await res.json();
    if (res.ok) {
      dispatch(setGoals(res.data.goals));
    }
    return res;
  };
};

export default function goalsReducer(state = {}, action) {
  switch (action.type) {
    case SET_GOALS:
      return action.goals;
    default:
      return state;
  }
}