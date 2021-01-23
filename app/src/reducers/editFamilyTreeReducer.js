import { EDIT_FAMILY_TREE_START, EDIT_FAMILY_TREE_SUCCESS, EDIT_FAMILY_TREE_ERROR } from '../actions';

const INITIAL_STATE = {
    pending: false,
    res: null,
    err: null
};

function editFamilyTreeReducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case EDIT_FAMILY_TREE_START:
            return {
                ...state,
                pending: action.payload,
                res: null,
                err: null
            }
        case EDIT_FAMILY_TREE_SUCCESS:
            return {
                ...state,
                pending: false,
                res: action.payload
            }
        case EDIT_FAMILY_TREE_ERROR:
            return {
                ...state,
                pending: false,
                err: action.payload
            }
        default:
            return state;
    }
}

export default editFamilyTreeReducer;