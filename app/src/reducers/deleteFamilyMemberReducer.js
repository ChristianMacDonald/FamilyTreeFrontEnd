import { DELETE_FAMILY_MEMBER_START, DELETE_FAMILY_MEMBER_SUCCESS, DELETE_FAMILY_MEMBER_ERROR } from '../actions';

const INITIAL_STATE = {
    pending: false,
    res: null,
    err: null
};

function deleteFamilyMemberReducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case DELETE_FAMILY_MEMBER_START:
            return {
                pending: true,
                res: null,
                err: null
            };
        case DELETE_FAMILY_MEMBER_SUCCESS:
            return {
                ...state,
                pending: false,
                res: action.payload
            };
        case DELETE_FAMILY_MEMBER_ERROR:
            return {
                ...state,
                pending: false,
                err: action.payload
            };
        default:
            return state;
    }
}

export default deleteFamilyMemberReducer;