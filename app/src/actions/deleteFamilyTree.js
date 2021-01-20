import authorizedAxios from '../authorizedAxios';

export const DELETE_FAMILY_TREE_START = 'DELETE_FAMILY_TREE_START';
export const DELETE_FAMILY_TREE_SUCCESS = 'DELETE_FAMILY_TREE_SUCCESS';
export const DELETE_FAMILY_TREE_ERROR = 'DELETE_FAMILY_TREE_ERROR';

export const deleteFamilyTree = id => dispatch => {
    dispatch({ type: DELETE_FAMILY_TREE_START, payload: true });
    authorizedAxios().delete(`https://cwm-family-tree.herokuapp.com/api/users/${localStorage.getItem('username')}/family-trees/${id}`).then(res => {
        dispatch({ type: DELETE_FAMILY_TREE_SUCCESS, payload: res });
    }).catch(err => {
        dispatch({ type: DELETE_FAMILY_TREE_ERROR, payload: err });
    });
}