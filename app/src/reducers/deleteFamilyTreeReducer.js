import { DELETE_FAMILY_TREE_START, DELETE_FAMILY_TREE_SUCCESS, DELETE_FAMILY_TREE_ERROR } from '../actions';

const INITIAL_STATE = {
    pending: false,
    res: null,
    err: null
};

function deleteFamilyTreeReducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case DELETE_FAMILY_TREE_START:
            return {
                ...state,
                pending: action.payload,
                res: null,
                err: null
            };
        case DELETE_FAMILY_TREE_SUCCESS:
            return {
                ...state,
                pending: false,
                res: action.payload
            };
        case DELETE_FAMILY_TREE_ERROR:
            return {
                ...state,
                pending: false,
                err: action.payload
            };
        default:
            return state;
    }
}

export default deleteFamilyTreeReducer;