import axios from 'axios';

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';

export const register = creds => dispatch => {
    dispatch({ type: REGISTER_START, payload: true });
    axios.post('https://cwm-family-tree.herokuapp.com/api/auth/register', creds).then(res => {
        dispatch({ type: REGISTER_SUCCESS, payload: res });
    }).catch(err => {
        dispatch({ type: REGISTER_ERROR, payload: err });
    });
}