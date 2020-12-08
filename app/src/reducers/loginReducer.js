import { LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR } from '../actions';

const initialState = {
    pending: false,
    res: null,
    err: null
}

function loginReducer(state=initialState, action) {
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                pending: action.payload
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                pending: false,
                res: action.payload
            }
        case LOGIN_ERROR:
            return {
                ...state,
                pending: false,
                err: action.payload
            }
        default:
            return state;
    }
}

export default loginReducer;