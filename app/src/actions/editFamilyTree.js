import authorizedAxios from '../authorizedAxios';

export const EDIT_FAMILY_TREE_START = 'EDIT_FAMILY_TREE_START';
export const EDIT_FAMILY_TREE_SUCCESS = 'EDIT_FAMILY_TREE_SUCCESS';
export const EDIT_FAMILY_TREE_ERROR = 'EDIT_FAMILY_TREE_ERROR';

export const editFamilyTree = (id, changes) => dispatch => {
    dispatch({ type: EDIT_FAMILY_TREE_START, payload: true });
    authorizedAxios().put(`https://cwm-family-tree.herokuapp.com/api/users/${localStorage.getItem('username')}/family-trees/${id}`, changes).then(res => {
        dispatch({ type: EDIT_FAMILY_TREE_SUCCESS, payload: res });
    }).catch(err => {
        dispatch({ type: EDIT_FAMILY_TREE_ERROR, payload: err });
    });
}