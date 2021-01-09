import authorizedAxios from '../authorizedAxios';

export const GET_FAMILY_TREES_START = 'GET_FAMILY_TREES_START';
export const GET_FAMILY_TREES_SUCCESS = 'GET_FAMILY_TREES_SUCCESS';
export const GET_FAMILY_TREES_ERROR = 'GET_FAMILY_TREES_ERROR';

export const getFamilyTrees = () => dispatch => {
    dispatch({ type: GET_FAMILY_TREES_START, payload: true });
    authorizedAxios().get(`https://cwm-family-tree.herokuapp.com/api/users/${localStorage.getItem('username')}/family-trees`).then(res => {
        dispatch({ type: GET_FAMILY_TREES_SUCCESS, payload: res });
    }).catch(err => {
        dispatch({ type: GET_FAMILY_TREES_ERROR, payload: err });
    });
};