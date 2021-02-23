export const SELECT_FAMILY_TREE = 'SELECT_FAMILY_TREE';

export function selectFamilyTree(tree) {
    return { type: SELECT_FAMILY_TREE, payload: tree };
};