import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Card, CardBody, CardHeader, Form, FormGroup, Input, Label } from 'reactstrap';

import { validateToken, getFamilyTrees, selectFamilyTree } from '../actions';

import FamilyMemberList from '../components/FamilyMemberList';

function FamilyTreeEditingForm(props) {
    let { id } = useParams();
    id = parseInt(id);

    let { trees } = props;

    useEffect(() => {
        props.validateToken();
        props.getFamilyTrees();
    }, []);

    useEffect(() => {
        let tree = trees.find(tree => tree.id === id);
        
        if (tree) {
            props.selectFamilyTree(tree);
        }
    }, [trees]);

    return (
        <Card id="ftef-card">
            <CardHeader>
                Family Member Editing Form
            </CardHeader>
            <CardBody>
                <Form id="family-tree-editing-form">
                    <FormGroup>
                        <Label>Name</Label>
                        <Input type="text" name="name" id="ftef-name" defaultValue={props.selectedTree ? props.selectedTree.name : ''}/>
                    </FormGroup>
                </Form>
                {props.selectedTree ? <FamilyMemberList editing familyTreeID={props.selectedTree.id}/> : null}
            </CardBody>
        </Card>
    );
}

function mapStateToProps(state) {
    return {
        trees: state.getFamilyTrees.res ? state.getFamilyTrees.res.data : [],
        selectedTree: state.selectFamilyTree.tree
    };
}

export default connect(mapStateToProps, { validateToken, getFamilyTrees, selectFamilyTree })(FamilyTreeEditingForm);