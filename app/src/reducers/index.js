import { combineReducers } from 'redux';

import login from './loginReducer';
import register from './registerReducer';
import getFamilyTrees from './getFamilyTreesReducer';
import createFamilyTree from './createFamilyTreeReducer';
import deleteFamilyTree from './deleteFamilyTreeReducer';

const rootReducer = combineReducers({ login, register, getFamilyTrees, createFamilyTree, deleteFamilyTree });

export default rootReducer;