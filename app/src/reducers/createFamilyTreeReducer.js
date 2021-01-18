import { CREATE_FAMILY_TREE_START, CREATE_FAMILY_TREE_SUCCESS, CREATE_FAMILY_TREE_ERROR } from '../actions';

const INITIAL_STATE = {
    pending: false,
    res: null,
    err: null
}

function createFamilyTreeReducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case CREATE_FAMILY_TREE_START:
            return {
                ...state,
                pending: true
            };
        case CREATE_FAMILY_TREE_SUCCESS:
            return {
                ...state,
                pending: false,
                res: action.payload
            };
        case CREATE_FAMILY_TREE_ERROR:
            return {
                ...state,
                pending: false,
                err: action.payload
            }
        default:
            return state;
    }
}

export default createFamilyTreeReducer;