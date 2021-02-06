import { combineReducers } from 'redux';

import login from './loginReducer';
import register from './registerReducer';
import getFamilyTrees from './getFamilyTreesReducer';
import createFamilyTree from './createFamilyTreeReducer';
import deleteFamilyTree from './deleteFamilyTreeReducer';
import editFamilyTree from './editFamilyTreeReducer';
import getFamilyMembers from './getFamilyMembersReducer';
import createFamilyMember from './createFamilyMemberReducer';
import validateToken from './validateTokenReducer';

const rootReducer = combineReducers({ login, register, getFamilyTrees, createFamilyTree, deleteFamilyTree, editFamilyTree, getFamilyMembers, createFamilyMember, validateToken });

export default rootReducer;