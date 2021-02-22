import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardHeader, ListGroup } from 'reactstrap';
import FamilyMember from './FamilyMember';
import { getFamilyMembers } from '../actions';

function FamilyMemberList(props) {
    useEffect(() => {
        props.getFamilyMembers(props.familyTreeID);
    }, []);

    return (
        props.familyMembers.length > 0 ? (
            <Card id="family-member-list-card">
                <CardHeader>
                    <h5>Family Members</h5>
                </CardHeader>
                <CardBody>
                    <ListGroup id="family-member-list">
                        {props.familyMembers.map((familyMember, i) => (
                            <FamilyMember key={i} familyMember={familyMember}/>
                        ))}
                    </ListGroup>
                </CardBody>
            </Card>
        ) : null
    );
}

function mapStateToProps(state) {
    return { familyMembers: state.getFamilyMembers.res ? state.getFamilyMembers.res.data : [] };
}

export default connect(mapStateToProps, { getFamilyMembers })(FamilyMemberList);