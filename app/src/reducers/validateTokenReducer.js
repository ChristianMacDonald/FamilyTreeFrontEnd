import { VALIDATE_TOKEN_START, VALIDATE_TOKEN_SUCCESS, VALIDATE_TOKEN_ERROR } from '../actions';

const INITIAL_STATE = {
    pending: false,
    res: null,
    err: null
};

function validateTokenReducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case VALIDATE_TOKEN_START:
            return {
                ...state,
                pending: action.payload,
                res: null,
                err: null
            };
        case VALIDATE_TOKEN_SUCCESS:
            return {
                ...state,
                pending: false,
                res: action.payload
            };
        case VALIDATE_TOKEN_ERROR:
            return {
                ...state,
                pending: false,
                err: action.payload
            };
        default:
            return state;
    }
}

export default validateTokenReducer;