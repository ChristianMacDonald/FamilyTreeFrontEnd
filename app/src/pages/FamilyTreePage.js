import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getFamilyTrees, createFamilyTree, deleteFamilyTree, editFamilyTree } from '../actions';
import { Button, Card, CardBody, CardTitle, TabContent, TabPane, Nav, NavItem, NavLink, Form, FormGroup, Label, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import classnames from 'classnames';
import './FamilyTreePage.css';

function FamilyTreePage(props) {
    const [activeTab, setActiveTab] = useState('1');
    const [familyTreeName, setFamilyTreeName] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedTrees, setSelectedTrees] = useState(null);
    const [editing, setEditing] = useState(false);
    
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
                            {props.res ? <Dropdown isOpen={dropdownOpen} toggle={() => {
                                setDropdownOpen(!dropdownOpen);
                            }}>
                                <DropdownToggle caret>Select</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={() => {
                                        setSelectedTrees(props.res.data);
                                        setEditing(false);
                                    }}>See All</DropdownItem>
                                    {props.res ? props.res.data.map((tree, i) => {
                                        return <DropdownItem key={i} data-id={tree.id} onClick={e => {
                                            setSelectedTrees([props.res.data.find(tree => tree.id === parseInt(e.target.dataset.id))]);
                                        }}>{tree.name}</DropdownItem>
                                    }) : null}
                                </DropdownMenu>
                            </Dropdown> : null}
                            {selectedTrees && selectedTrees.length === 1 ? <Card>
                                <CardBody>
                                    <CardTitle>{selectedTrees[0].name}</CardTitle>
                                    {!editing ? <Button onClick={() => {
                                        setEditing(true);
                                    }}>Edit</Button> : null}
                                    {editing ? <div>
                                        <Form>
                                            <FormGroup>
                                                <Label>Name</Label>
                                                <Input defaultValue={selectedTrees[0].name} type="text" name="name" id="family-tree-editing-name" onChange={e => {
                                                    setFamilyTreeName(e.target.value);
                                                }}/>
                                                <Button onClick={e => {
                                                    props.editFamilyTree(selectedTrees[0].id, { name: familyTreeName });
                                                }}>Submit</Button>
                                            </FormGroup>
                                        </Form>
                                            <Button onClick={() => {
                                                setEditing(false);
                                            }}>Cancel</Button>
                                    </div> : null}
                                    <br/>
                                    <Button onClick={e => {
                                        props.deleteFamilyTree(selectedTrees[0].id);
                                    }}>Delete</Button>
                                </CardBody>
                            </Card> : null}
                            {selectedTrees && selectedTrees.length > 1 ? selectedTrees.map((tree, i) => {
                                return (
                                    <Card key={i}>
                                        <CardBody>
                                            <CardTitle>{tree.name}</CardTitle>
                                            {!editing ? <Button data-id={tree.id} onClick={e => {
                                                setSelectedTrees([props.res.data.find(tree => tree.id === parseInt(e.target.dataset.id))]);
                                                setEditing(true);
                                            }}>Edit</Button> : null}
                                            <br/>
                                            <Button onClick={e => {
                                                props.deleteFamilyTree(tree.id);
                                            }}>Delete</Button>
                                        </CardBody>
                                    </Card>
                                );
                            }): null}
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

export default connect(state => ({ pending: state.getFamilyTrees.pending, res: state.getFamilyTrees.res }), { getFamilyTrees, createFamilyTree, deleteFamilyTree, editFamilyTree })(FamilyTreePage);