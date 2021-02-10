import authorizedAxios from '../authorizedAxios';
import { DELETE_FAMILY_TREE_ERROR } from './deleteFamilyTree';

export const DELETE_FAMILY_MEMBER_START = 'DELETE_FAMILY_MEMBER_START';
export const DELETE_FAMILY_MEMBER_SUCCESS = 'DELETE_FAMILY_MEMBER_SUCCESS';
export const DELETE_FAMILY_MEMBER_ERROR = 'DELETE_FAMILY_MEMBER_ERROR';

export const deleteFamilyMember = (familyTreeID, familyMemberID) => dispatch => {
    dispatch({ type: familyMemberID, payload: true });
    authorizedAxios().delete(`https://cwm-family-tree.herokuapp.com/api/users/${localStorage.getItem('username')}/family-trees/${familyTreeID}/family-members/${familyMemberID}`).then(res => {
        dispatch({ type: DELETE_FAMILY_MEMBER_SUCCESS, payload: res });
    }).catch(err => {
        dispatch({ type: DELETE_FAMILY_TREE_ERROR, payload: err });
    });
};