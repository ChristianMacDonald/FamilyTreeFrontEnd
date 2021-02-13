import { SELECT_FAMILY_TREE } from '../actions';

const INITIAL_STATE = {
    selectedTreeID: -1
};

function selectFamilyTreeReducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case SELECT_FAMILY_TREE:
            return {
                ...state,
                selectedTreeID: action.payload
            };
        default:
            return state;
    }
}

export default selectFamilyTreeReducer;