import axios from 'axios';

export const VALIDATE_TOKEN_START = 'VALIDATE_TOKEN_START';
export const VALIDATE_TOKEN_SUCCESS = 'VALIDATE_TOKEN_SUCCESS';
export const VALIDATE_TOKEN_ERROR = 'ERROR_TOKEN_ERROR';

export const validateToken = () => dispatch => {
    dispatch({ type: VALIDATE_TOKEN_START, payload: true });
    axios.post('https://cwm-family-tree.herokuapp.com/api/auth/token', { token: localStorage.getItem(token) }).then(res => {
        dispatch({ type: VALIDATE_TOKEN_SUCCESS, payload: res });
    }).catch(err => {
        dispatch({ type: VALIDATE_TOKEN_ERROR, payload: err });
    });
}