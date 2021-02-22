import { useState } from 'react';
import { Card, CardHeader, CardBody, ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap';

import FamilyTreeCreationForm from './FamilyTreeCreationForm';
import FamilyTree from './FamilyTree';

function FamilyTreeList(props) {
    const [formShowing, setFormShowing] = useState(false);

    const openForm = () => {
        setFormShowing(true);
    };

    const closeForm = () => {
        setFormShowing(false);
    }

    return (
        <Card id="family-tree-list-card">
            <CardHeader>
                <h1>Family Trees</h1>
            </CardHeader>
            <CardBody>
                <ListGroup id="family-tree-list">
                    {props.familyTrees.map((tree, i) => (
                        <FamilyTree key={i} tree={tree}/>
                    ))}
                    <ListGroupItem className="family-tree" id="create-family-tree-button">
                        {formShowing ? <FamilyTreeCreationForm closeForm={closeForm}/> : <ListGroupItemHeading  onClick={openForm}>+</ListGroupItemHeading>}
                    </ListGroupItem>
                </ListGroup>
            </CardBody>
        </Card>
    );
}

export default FamilyTreeList;