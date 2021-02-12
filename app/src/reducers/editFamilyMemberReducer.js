import { EDIT_FAMILY_MEMBER_START, EDIT_FAMILY_MEMBER_SUCCESS, EDIT_FAMILY_MEMBER_ERROR } from '../actions';

const INITIAL_STATE = {
    pending: false,
    res: null,
    err: null
};

function editFamilyMemberReducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case EDIT_FAMILY_MEMBER_START:
            return {
                pending: action.payload,
                res: null,
                err: null
            };
        case EDIT_FAMILY_MEMBER_SUCCESS:
            return {
                ...state,
                pending: false,
                res: action.payload
            };
        case EDIT_FAMILY_MEMBER_ERROR:
            return {
                ...state,
                pending: false,
                err: action.payload
            };
        default:
            return state;
    }
}

export default editFamilyMemberReducer;