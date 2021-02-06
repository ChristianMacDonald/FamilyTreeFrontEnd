import { CREATE_FAMILY_MEMBER_START, CREATE_FAMILY_MEMBER_SUCCESS, CREATE_FAMILY_MEMBER_ERROR } from '../actions';

const INITIAL_STATE = {
    pending: false,
    res: null,
    err: null
};

function createFamilyMemberReducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case CREATE_FAMILY_MEMBER_START:
            return {
                ...state,
                pending: true,
                res: null,
                err: null
            };
        case CREATE_FAMILY_MEMBER_SUCCESS:
            return {
                ...state,
                pending: false,
                res: action.payload
            };
        case CREATE_FAMILY_MEMBER_SUCCESS:
            return {
                ...state,
                pending: false,
                err: action.payload
            };
        default:
            return state;
    }
}

export default createFamilyMemberReducer;