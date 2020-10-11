const SET_EXPENSES = 'expenses/GET_EXPENSES';

export const setExpenses = expenses => {
    return {
        type: SET_EXPENSES,
        expenses: expenses
    }
}

export const createExpense = (description, amount, category_id, userId) => {
    return async dispatch => {
        const res = await fetch(`/api/expenses/${userId}`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ description, amount, category_id }),
        });
        res.data = await res.json();
         if (res.ok) {
           dispatch(setExpenses(res.data.expenses));
         }
         return res;
    }
}

export const getExpenses = (userId) => {
    return async dispatch => {
        const res = await fetch(`/api/expenses/${userId}`)
        res.data = await res.json();
        if (res.ok) {
            dispatch(setExpenses(res.data.expenses))
        }
        return res;
    }
}

export const deleteExpense = (id, userId) => {
  return async (dispatch) => {
    const res = await fetch(`/api/expenses/${userId}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    res.data = await res.json();
    if (res.ok) {
      dispatch(setExpenses(res.data.expenses));
    }
    return res;
  };
};

export default function expensesReducer(state = {}, action) {
    switch (action.type) {
        case SET_EXPENSES:
            return action.expenses;
        default:
            return state;
    }
}