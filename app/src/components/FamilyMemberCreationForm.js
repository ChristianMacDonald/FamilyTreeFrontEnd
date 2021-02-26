import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Card, CardHeader, CardBody, Button } from 'reactstrap';

import { createFamilyMember } from '../actions';

function FamilyMemberCreationForm(props) {
    let familyTreeID = parseInt(useParams().id);

    const createFamilyMember = e => {
        e.preventDefault();
        let motherID = e.target.mother.value ? parseInt(e.target.mother.value) : null; 
        let fatherID = e.target.father.value ? parseInt(e.target.father.value) : null;
        let age = e.target.age.value ? parseInt(e.target.age.value) : null;
        console.log({
            familyMember: {
                family_tree_id: familyTreeID,
                mother_id: motherID,
                father_id: fatherID,
                first_name: e.target['first-name'].value,
                last_name: e.target['last-name'].value,
                suffix: e.target.suffix.value,
                age: age,
                gender: e.target.gender.value
            }
        });
    };

    return (
        <Card id="fmcf-card">
            <CardHeader>
                <h5>Family Member Creation Form</h5>
            </CardHeader>
            <Button color="danger" id="fmcf-close-button" onClick={props.close}>X</Button>
            <CardBody>
                <Form onSubmit={createFamilyMember} id="family-member-creation-form">
                    <FormGroup>
                        <Label for="fmcf-first-name">First Name</Label>
                        <Input type="text" name="first-name" id="fmcf-first-name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="fmcf-last-name">First Name</Label>
                        <Input type="text" name="last-name" id="fmcf-last-name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="fmcf-mother">Mother</Label>
                        <Input type="select" name="mother" id="fmcf-mother">
                            <option></option>
                            {props.familyMembers.map((familyMember, i) => <option key={i} value={familyMember.id}>{`${familyMember.first_name} ${familyMember.last_name}`}</option>)}
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="fmcf-father">Father</Label>
                        <Input type="select" name="father" id="fmcf-father">
                            <option></option>
                            {props.familyMembers.map((familyMember, i) => <option key={i} value={familyMember.id}>{`${familyMember.first_name} ${familyMember.last_name}`}</option>)}
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="fmcf-suffix">Suffix</Label>
                        <Input type="select" name="suffix" id="fmcf-suffix">
                            {['', 'Sr.', 'Jr.', 'I', 'II', 'III', 'IV', 'V', 'Custom'].map((suffix, i) => <option key={i} value={suffix}>{suffix}</option>)}
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="fmcf-age">Age</Label>
                        <Input type="number" name="age" id="fmcf-age"/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Gender</Label>
                        <Input type="text" name="gender" id="fmcf-gender"/>
                    </FormGroup>
                    <Input type="submit"/>
                </Form>
            </CardBody>
        </Card>
    );
}

function mapStateToProps(state) {
    return { familyMembers: state.getFamilyMembers.res ? state.getFamilyMembers.res.data : []};
}

export default connect(mapStateToProps, { createFamilyMember })(FamilyMemberCreationForm);