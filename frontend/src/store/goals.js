const SET_GOALS = "expenses/SET_GOALS";

export const setGoals = (goals) => {
  return {
    type: SET_GOALS,
    goals,
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

export default function goalsReducer(state = {}, action) {
  switch (action.type) {
    case SET_GOALS:
      return action.goals;
    default:
      return state;
  }
}