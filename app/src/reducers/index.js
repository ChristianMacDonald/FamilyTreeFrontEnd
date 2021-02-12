import { combineReducers } from 'redux';

import login from './loginReducer';
import register from './registerReducer';
import getFamilyTrees from './getFamilyTreesReducer';
import createFamilyTree from './createFamilyTreeReducer';
import deleteFamilyTree from './deleteFamilyTreeReducer';
import editFamilyTree from './editFamilyTreeReducer';
import getFamilyMembers from './getFamilyMembersReducer';
import createFamilyMember from './createFamilyMemberReducer';
import deleteFamilyMember from './deleteFamilyMemberReducer';
import editFamilyMember from './editFamilyMemberReducer';
import validateToken from './validateTokenReducer';

const rootReducer = combineReducers({ login, register, getFamilyTrees, createFamilyTree, deleteFamilyTree, editFamilyTree, getFamilyMembers, createFamilyMember, deleteFamilyMember, validateToken, editFamilyMember });

export default rootReducer;