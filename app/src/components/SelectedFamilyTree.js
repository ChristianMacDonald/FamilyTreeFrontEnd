import { useEffect } from 'react';
import { connect } from 'react-redux';
import { ListGroupItem, ListGroupItemHeading, Fade } from 'reactstrap';

import { getFamilyMembers } from '../actions';

import FamilyMemberList from './FamilyMemberList';

function SelectedFamilyTree(props) {
    useEffect(() => {
        props.getFamilyMembers(props.tree.id);
    }, []);

    return (
        <ListGroupItem className="family-tree selected">
            <ListGroupItemHeading>{props.tree.name}</ListGroupItemHeading>
            <Fade in>
                <h5>Family Members</h5>
                <FamilyMemberList familyMembers={props.familyMembers}/>
            </Fade>
        </ListGroupItem>
    );
}

function mapStateToProps(state) {
    return { familyMembers: state.getFamilyMembers.res ? state.getFamilyMembers.res.data : [] }; 
}

export default connect(mapStateToProps, { getFamilyMembers })(SelectedFamilyTree);