const SET_USER = 'auth/SET_USER';
const REMOVE_USER = 'auth/REMOVE_USER';

export const setUser = user => {
    return {
        type: SET_USER,
        user
    }
}

export const removeUser = () => {
    return {
        type: REMOVE_USER
    };
};

export const login = (email, password) => {
    return async dispatch => {
        const res = await fetch('/api/session/', {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password })
        })
        res.data = await res.json();
        if (res.ok) {
            dispatch(setUser(res.data.user))
        }
        return res;
    }
}

export const signup = (username, email, password, monthly_income) => {
    return async dispatch => {
        const res = await fetch('/api/users/', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password, monthly_income })
        })
        res.data = await res.json();
        if (res.ok) {
            dispatch(setUser(res.data.user));
        }
        return res;
    }
}

export const logout = () => {
    return async dispatch => {
        const res = await fetch('/api/session/', {
            method: 'delete',
        })
        if (res.ok) {
            dispatch(removeUser());
        }
        return res;
    }
}

export default function authReducer(state = {}, action) {
  switch (action.type) {
    case SET_USER:
      return action.user;
    case REMOVE_USER:
      return {};
    default:
      return state;
  }
}