import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START, payload: true });
    axios.post('https://cwm-family-tree.herokuapp.com/api/auth/login', creds).then(res => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('username', creds.username);
        dispatch({ type: LOGIN_SUCCESS, payload: res });
    }).catch(err => {
        dispatch({ type: LOGIN_ERROR, payload: err });
    });
}