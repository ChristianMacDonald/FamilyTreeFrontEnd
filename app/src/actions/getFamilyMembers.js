import authorizedAxios from '../authorizedAxios';

export const GET_FAMILY_MEMBERS_START = 'GET_FAMILY_MEMBERS_START';
export const GET_FAMILY_MEMBERS_SUCCESS = 'GET_FAMILY_MEMBERS_SUCCESS';
export const GET_FAMILY_MEMBERS_ERROR = 'GET_FAMILY_MEMBERS_ERROR';

export const getFamilyMembers = familyTreeId => dispatch => {
    dispatch({ type: GET_FAMILY_MEMBERS_START, payload: true });
    authorizedAxios().get(`https://cwm-family-tree.herokuapp.com/api/users/${localStorage.getItem('username')}/family-trees/${familyTreeId}/family-members`).then(res => {
        dispatch({ type: GET_FAMILY_MEMBERS_SUCCESS, payload: res });
    }).catch(err => {
        dispatch({ type: GET_FAMILY_MEMBERS_ERROR, payload: err });
    });
};