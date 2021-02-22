import { connect } from 'react-redux';

import { createFamilyTree } from '../actions';

import { Card, CardBody, CardHeader, Button, Form, FormGroup, Label, Input } from 'reactstrap';

function FamilyTreeCreationForm(props) {
    const handleSubmit = e => {
        e.preventDefault();
        props.createFamilyTree({ name: e.target.name.value });
    };

    return (
        <Card id="ftcf-card">
            <CardHeader>
                <h6>Family Tree Creation Form</h6>
                <Button onClick={props.closeForm} color="danger" id="ftcf-close-button">X</Button>
            </CardHeader>
            <CardBody>
                <Form onSubmit={handleSubmit} id="family-tree-creation-form">
                    <FormGroup>
                        <Label for="ftcf-name">Name</Label>
                        <Input type="text" name="name" id="ftcf-name"/>
                    </FormGroup>
                    <Input type="submit"/>
                </Form>
            </CardBody>
        </Card>
    );
}

export default connect(() => ({}), { createFamilyTree })(FamilyTreeCreationForm);