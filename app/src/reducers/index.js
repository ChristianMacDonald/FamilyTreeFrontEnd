import { combineReducers } from 'redux';

import login from './loginReducer';
import register from './registerReducer';
import getFamilyTrees from './getFamilyTreesReducer';

const rootReducer = combineReducers({ login, register, getFamilyTrees });

export default rootReducer;