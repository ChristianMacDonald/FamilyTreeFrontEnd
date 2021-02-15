import { ListGroupItem } from 'reactstrap';

function FamilyMember(props) {
    return (
        <ListGroupItem className="family-member">{`${props.familyMember.first_name} ${props.familyMember.last_name}`}</ListGroupItem>
    );
}

export default FamilyMember;