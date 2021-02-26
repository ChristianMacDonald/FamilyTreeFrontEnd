import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardHeader, ListGroup, ListGroupItem } from 'reactstrap';

import FamilyMember from './FamilyMember';
import FamilyMemberCreationForm from './FamilyMemberCreationForm';
import { getFamilyMembers } from '../actions';

function FamilyMemberList(props) {
    const [formShowing, setFormShowing] = useState(false);
    useEffect(() => {
        props.getFamilyMembers(props.familyTreeID);
    }, []);

    const showForm = () => {
        if (!formShowing) {
            setFormShowing(true);
        }
    };

    const closeForm = () => {
        if (formShowing) {
            setFormShowing(false);
        }
    };

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
                        {props.editing ? <ListGroupItem className="family-member" onClick={showForm}>{formShowing ? <FamilyMemberCreationForm close={closeForm}/> : '+'}</ListGroupItem> : null}
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