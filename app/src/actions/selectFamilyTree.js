export const SELECT_FAMILY_TREE = 'SELECT_FAMILY_TREE';

export const selectFamilyTree = familyTreeID => {
    return {type: SELECT_FAMILY_TREE, payload: familyTreeID};
};