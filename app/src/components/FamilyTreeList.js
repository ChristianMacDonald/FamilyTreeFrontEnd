import { ListGroup } from 'reactstrap';

import FamilyTree from './FamilyTree';

function FamilyTreeList(props) {
    return (
        <ListGroup id="family-tree-list">
            {props.familyTrees.map((tree, i) => (
                <FamilyTree key={i} tree={tree}/>
            ))}
        </ListGroup>
    );
}

export default FamilyTreeList;