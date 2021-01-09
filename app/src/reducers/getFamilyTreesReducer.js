import { GET_FAMILY_TREES_START, GET_FAMILY_TREES_SUCCESS, GET_FAMILY_TREES_ERROR } from '../actions';

const initialState = {
    pending: false,
    res: null,
    err: null
}

function getFamilyTreesReducer(state=initialState, action) {
    switch (action.type) {
        case GET_FAMILY_TREES_START:
            return {
                ...state,
                pending: true,
                res: null,
                err: null
            }
        case GET_FAMILY_TREES_SUCCESS:
            return {
                ...state,
                pending: false,
                res: action.payload
            }
        case GET_FAMILY_TREES_ERROR:
            return {
                ...state,
                pending: false,
                err: action.payload
            }
        default:
            return state;
    }
}

export default getFamilyTreesReducer;