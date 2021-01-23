import { GET_FAMILY_MEMBERS_ERROR, GET_FAMILY_MEMBERS_START, GET_FAMILY_MEMBERS_SUCCESS } from '../actions';

const INITIAL_STATE = {
    pending: false,
    res: null,
    err: null
};

function getFamilyMembersReducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case GET_FAMILY_MEMBERS_START:
            return {
                ...state,
                pending: action.payload,
                res: null,
                err: null
            };
        case GET_FAMILY_MEMBERS_SUCCESS:
            return {
                ...state,
                pending: false,
                res: action.payload
            };
        case GET_FAMILY_MEMBERS_ERROR:
            return {
                ...state,
                pending: false,
                err: action.payload
            };
        default:
            return state;
    }
}

export default getFamilyMembersReducer;