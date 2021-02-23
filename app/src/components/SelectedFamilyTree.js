import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardHeader, CardBody, ListGroupItem, ListGroupItemHeading } from 'reactstrap';

import { getFamilyMembers, deleteFamilyTree, selectFamilyTree } from '../actions';

import FamilyMemberList from './FamilyMemberList';

function SelectedFamilyTree(props) {
    useEffect(() => {
        props.getFamilyMembers(props.tree.id);
    }, []);

    const deleteFamilyTree = () => {
        props.deleteFamilyTree(props.tree.id);
    };

    const edit = () => {
        window.location.replace(`http://localhost:3000/edit/${props.tree.id}`);
    };

    return (
        <ListGroupItem className="family-tree selected">
            <ListGroupItemHeading>{props.tree.name}</ListGroupItemHeading>
            <FamilyMemberList familyMembers={props.familyMembers}/>
            <div>
                <Button color="warning" onClick={edit}>Edit</Button>
                <Button color="danger" onClick={deleteFamilyTree}>Delete</Button>
            </div>
        </ListGroupItem>
    );
}

function mapStateToProps(state) {
    return {
        familyMembers: state.getFamilyMembers.res ? state.getFamilyMembers.res.data : [],
        selectedTreeID: state.selectFamilyTree.tree ? state.selectFamilyTree.tree.id : -1
    }; 
}

export default connect(mapStateToProps, { getFamilyMembers, deleteFamilyTree, selectFamilyTree })(SelectedFamilyTree);