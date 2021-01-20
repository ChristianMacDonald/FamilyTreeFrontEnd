import { useEffect, useState } from 'react';
import {} from 'reactstrap';
import { connect } from 'react-redux';
import { getFamilyTrees, createFamilyTree, deleteFamilyTree } from '../actions';
import { Button, Card, CardBody, TabContent, TabPane, Nav, NavItem, NavLink, Form, FormGroup, Label, Input } from 'reactstrap';
import classnames from 'classnames';
import './FamilyTreePage.css';

function FamilyTreePage(props) {
    const [activeTab, setActiveTab] = useState('1');
    const [familyTreeName, setFamilyTreeName] = useState('');
    
    const toggle = tab => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    }

    useEffect(() => {
        props.getFamilyTrees();
    }, []);

    return (
        <div id="family-tree-page">
            <Card>
                <CardBody>
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '1' })}
                                onClick={() => {toggle('1');}}
                            >
                                Saved Family Trees
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '2' })}
                                onClick={() => {toggle('2');}}
                            >
                                Create New Family Tree
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            {props.pending ? <h1>Loading</h1> : null}
                            {(!props.pending && props.res) ? props.res.data.length > 0 ? props.res.data.map((tree, i) => <div key={i}>{tree.name}<Button data-id={tree.id} onClick={(e) => {
                                props.deleteFamilyTree(e.target.dataset.id);
                            }}>Delete</Button></div>) : 'No saved trees' : null}
                        </TabPane>
                        <TabPane tabId="2">
                            <Form>
                                <FormGroup>
                                    <Label for="name">Name</Label>
                                    <Input type="text" name="name" id="family-tree-name" onChange={e => {
                                        setFamilyTreeName(e.target.value);
                                    }}/>
                                    <Button onClick={() => {
                                        props.createFamilyTree({ name: familyTreeName });
                                    }}>Submit</Button>
                                </FormGroup>
                            </Form>
                        </TabPane>
                    </TabContent>
                </CardBody>
            </Card>
        </div>
    );
}

export default connect(state => ({ pending: state.getFamilyTrees.pending, res: state.getFamilyTrees.res }), { getFamilyTrees, createFamilyTree, deleteFamilyTree })(FamilyTreePage);