import { useEffect } from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'reactstrap';
import FamilyMember from './FamilyMember';
import { getFamilyMembers } from '../actions';

function FamilyMemberList(props) {
    useEffect(() => {
        props.getFamilyMembers(props.familyTreeID);
    }, []);

    return (
        <ListGroup id="family-member-list">
            {props.familyMembers.map((familyMember, i) => (
                <FamilyMember key={i} familyMember={familyMember}/>
            ))}
        </ListGroup>
    );
}

function mapStateToProps(state) {
    return { familyMembers: state.getFamilyMembers.res ? state.getFamilyMembers.res.data : [] };
}

export default connect(mapStateToProps, { getFamilyMembers })(FamilyMemberList);