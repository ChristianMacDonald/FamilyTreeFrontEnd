import { SELECT_FAMILY_TREE } from '../actions';

const INITIAL_STATE = {
    tree: null
};

function selectFamilyTreeReducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case SELECT_FAMILY_TREE:
            return {
                ...state,
                tree: action.payload
            };
        default:
            return state;
    }
}

export default selectFamilyTreeReducer;