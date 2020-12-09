import { REGISTER_START, REGISTER_SUCCESS, REGISTER_ERROR } from '../actions';

const initialState = {
    pending: false,
    res: null,
    err: null
};

function registerReducer(state=initialState, action) {
    switch (action.type) {
        case REGISTER_START:
            return {
                ...state,
                pending: action.payload,
                res: null,
                err: null
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                pending: false,
                res: action.payload
            }
        case REGISTER_ERROR:
            return {
                ...state,
                pending: false,
                err: action.payload
            }
        default:
            return state;
    }
}

export default registerReducer;