import authorizedAxios from '../authorizedAxios';

export const CREATE_FAMILY_TREE_START = 'CREATE_FAMILY_TREE_START';
export const CREATE_FAMILY_TREE_SUCCESS = 'CREATE_FAMILY_TREE_SUCCESS';
export const CREATE_FAMILY_TREE_ERROR = 'CREATE_FAMILY_TREE_ERROR';

export const createFamilyTree = tree => dispatch => {
    dispatch({ type: CREATE_FAMILY_TREE_START, payload: true });
    authorizedAxios().post(`https://cwm-family-tree.herokuapp.com/api/users/${localStorage.getItem('username')}/family-trees`, tree).then(res => {
        dispatch({ type: CREATE_FAMILY_TREE_SUCCESS, payload: res });
        window.location.reload();
    }).catch(err => {
        dispatch({ type: CREATE_FAMILY_TREE_ERROR, payload: err });
    });
}