import authorizedAxios from '../authorizedAxios';

export const CREATE_FAMILY_MEMBER_START = 'CREATE_FAMILY_MEMBER_START';
export const CREATE_FAMILY_MEMBER_SUCCESS = 'CREATE_FAMILY_MEMBER_SUCCESS';
export const CREATE_FAMILY_MEMBER_ERROR = 'CREATE_FAMILY_MEMBER_ERROR';

export const createFamilyMember = familyMember => dispatch => {
    dispatch({ type: CREATE_FAMILY_MEMBER_START, payload: true });
    authorizedAxios().post(`https://cwm-family-tree.herokuapp.com/api/users/${localStorage.getItem('username')}/family-trees/${familyMember.family_tree_id}/family-members`, familyMember).then(res => {
        dispatch({ type: CREATE_FAMILY_MEMBER_SUCCESS, payload: res });
    }).catch(err => {
        dispatch({ type: CREATE_FAMILY_MEMBER_ERROR, payload: err });
    });
}