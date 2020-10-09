const SET_EXPENSES = 'expenses/GET_EXPENSES';

export const setExpenses = expenses => {
    return {
        type: SET_EXPENSES,
        expenses: expenses
    }
}

export const getExpenses = (userId) => {
    return async dispatch => {
        const res = await fetch(`/api/expenses/${userId}`)
        res.data = await res.json();
        if (res.ok) {
            dispatch(setExpenses(res.data.user))
        }
        return res;
    }
}

export default function expensesReducer(state = {}, action) {
    switch (action.type) {
        case SET_EXPENSES:
            return action.expenses;
        default:
            return state;
    }
}