export const SELECT_FAMILY_TREE = 'SELECT_FAMILY_TREE';

export const selectFamilyTree = tree => {
    return {type: SELECT_FAMILY_TREE, payload: tree.id};
};