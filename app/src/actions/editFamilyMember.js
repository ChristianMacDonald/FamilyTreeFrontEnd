import authorizedAxios from '../authorizedAxios';

export const EDIT_FAMILY_MEMBER_START = 'EDIT_FAMILY_MEMBER_START';
export const EDIT_FAMILY_MEMBER_SUCCESS = 'EDIT_FAMILY_MEMBER_SUCCESS';
export const EDIT_FAMILY_MEMBER_ERROR = 'EDIT_FAMILY_MEMBER_ERROR';

export const editFamilyMember = (familyTreeID, familyMemberID, changes) => dispatch => {
    dispatch({ type: EDIT_FAMILY_MEMBER_START, payload: true });
    authorizedAxios().put(`https://cwm-family-tree.herokuapp.com/api/users/${localStorage.getItem('username')}/family-trees/${familyTreeID}/family-members/${familyMemberID}`, changes).then(res => {
        dispatch({ type: EDIT_FAMILY_MEMBER_SUCCESS, payload: res });
    }).catch(err => {
        dispatch({ type: EDIT_FAMILY_MEMBER_SUCCESS, payload: err });
    });
};