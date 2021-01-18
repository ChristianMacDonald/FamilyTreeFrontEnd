import { combineReducers } from 'redux';

import login from './loginReducer';
import register from './registerReducer';
import getFamilyTrees from './getFamilyTreesReducer';
import createFamilyTree from './createFamilyTreeReducer';

const rootReducer = combineReducers({ login, register, getFamilyTrees, createFamilyTree });

export default rootReducer;