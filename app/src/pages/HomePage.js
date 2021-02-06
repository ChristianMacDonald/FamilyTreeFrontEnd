import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { Button, Card, Form, FormGroup, Input, Label, ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap';

import { getFamilyTrees, createFamilyTree, editFamilyTree, deleteFamilyTree, validateToken, getFamilyMembers } from '../actions';

import './HomePage.css';

function HomePage(props) {
  useEffect(() => {
    props.validateToken();
    props.getFamilyTrees();
  }, []);

  const [selectedFamilyTree, setSelectedFamilyTree] = useState({});
  const [familyTreeFormToggle, setFamilyTreeFormToggle] = useState(false);
  const [familyTreeName, setFamilyTreeName] = useState('');
  const [editing, setEditing] = useState(false);
  const [familyMemberFormToggle, setFamilyMemberFormToggle] = useState(false);
  const [motherID, setMotherID] = useState(-1);
  const [fatherID, setFatherID] = useState(-1);

  const updateFamilyTreeName = e => {
    setFamilyTreeName(e.target.value);
  };

  const changeSelectedTree = e => {
    const treeID = parseInt(e.target.dataset.id);
    setSelectedFamilyTree(props.familyTrees.find(tree => tree.id === treeID));
    props.getFamilyMembers(treeID);
  };

  const deselectFamilyTree = () => {
    setSelectedFamilyTree({});
  };

  const toggleFamilyTreeForm = () => {
    setFamilyTreeFormToggle(!familyTreeFormToggle);
  };

  const toggleFamilyMemberForm = () => {
    setFamilyMemberFormToggle(!familyMemberFormToggle);
  };

  const toggleEditing = () => {
    setEditing(!editing);
  };

  const updateMotherID = e => {
    setMotherID(parseInt(e.target.value));
  };

  const updateFatherID = e => {
    setFatherID(parseInt(e.target.value));
  };

  return editing ? (
    <div id="home-page">
      <h1>{`Edit ${selectedFamilyTree.name}`}</h1>
      <br/>
      <Card id="ftef-card">
        <Form id="family-tree-editing-form" onSubmit={e => {
          e.preventDefault();
          props.editFamilyTree(selectedFamilyTree.id, { name: familyTreeName });
        }}>
          <FormGroup>
            <Label for="ftef-name">Name</Label>
            &nbsp;
            <Input type="text" defaultValue={selectedFamilyTree.name} name="name" id="ftef-name" onChange={updateFamilyTreeName}/>
          </FormGroup>
          <Input type="submit" id="ftef-submit"/>
        </Form>
      </Card>
      <br/>
      <Button onClick={toggleEditing}>Cancel</Button>
    </div>
  ) : (
    <div id="home-page">
      <h1>Family Trees</h1>
      <br/>
      <Card id="family-tree-list-card">
        <ListGroup id="family-tree-list">
          {props.familyTrees.map((familyTree, i) => {
            return (
              <div key={i}>
                {familyTree.id !== selectedFamilyTree.id ? (
                  <ListGroupItem>
                    <ListGroupItemHeading>{`Name: ${familyTree.name}`}</ListGroupItemHeading>
                    <Button data-id={familyTree.id} onClick={changeSelectedTree}>Show More</Button>
                  </ListGroupItem>
                ) : (
                  <ListGroupItem>
                    <ListGroupItemHeading>{`Name: ${familyTree.name}`}</ListGroupItemHeading>
                    <br/>
                    <ListGroupItemHeading>Family Members</ListGroupItemHeading>
                    <hr/>
                    <ListGroup id="family-member-list">
                      {props.familyMembers.length > 0 ? props.familyMembers.map((member, i) => (
                        <ListGroupItem key={i}>
                          {`${member.first_name} ${member.last_name}`}
                        </ListGroupItem>
                      )) : 'No family members'}
                    </ListGroup>
                    <br/>
                    {familyMemberFormToggle ? (
                      <Form id="family-member-creation-form">
                        <FormGroup>
                          <Label for="fmcf-first-name">First Name</Label>
                          <Input type="text" name="first-name" id="fmcf-first-name"/>
                        </FormGroup>
                        <FormGroup>
                          <Label for="fmcf-last-name">Last Name</Label>
                          <Input type="text" name="last-name" id="fmcf-last-name"/>
                        </FormGroup>
                        {props.familyMembers.length > 1 ? (
                          <FormGroup>
                            <Label for="fmcf-mother">Mother</Label>
                            <Input type="select" name="mother" id="fmcf-mother" onChange={updateMotherID}>
                              {props.familyMembers.map((familyMember, i) => {
                                return (
                                  <option key={i} value={familyMember.id}>{`${familyMember.first_name} ${familyMember.last_name}`}</option>
                                );
                              })}
                            </Input>
                          </FormGroup>
                        ) : null}
                        {props.familyMembers.length > 1 ? (
                          <FormGroup>
                            <Label for="fmcf-father">Father</Label>
                            <Input type="select" name="father" id="fmcf-father" onChange={updateFatherID}>
                              {props.familyMembers.map((familyMember, i) => {
                                return (
                                  <option key={i} value={familyMember.id}>{`${familyMember.first_name} ${familyMember.last_name}`}</option>
                                );
                              })}
                            </Input>
                          </FormGroup>
                        ) : null}
                      </Form>
                    ) : <Button onClick={toggleFamilyMemberForm}>Create New Family Member</Button>}
                    <br/>
                    <Button color="info" onClick={() => {
                      toggleEditing();
                    }}>Edit</Button>
                    &nbsp;
                    <Button color="danger" data-id={familyTree.id} onClick={e => {
                      props.deleteFamilyTree(parseInt(e.target.dataset.id));
                    }}>Delete</Button>
                    &nbsp;
                    <Button onClick={deselectFamilyTree}>Show Less</Button>
                  </ListGroupItem>
                )}
              </div>
            );
          })}
        </ListGroup>
      </Card>
      <br/>
      {familyTreeFormToggle ? (
        <div>
          <Card id="ftcf-card">
            <Form id="family-tree-creation-form" onSubmit={e => {
              e.preventDefault();
              props.createFamilyTree({ name: familyTreeName });
            }}>
              <FormGroup>
                <Label for="ftcf-name">Name</Label>
                &nbsp;
                <Input type="text" name="name" id="ftcf-name" onChange={updateFamilyTreeName}/>
              </FormGroup>
              <Input type="submit" id="ftcf-submit"/>
            </Form>
          </Card>
          <br/>
          <Button onClick={toggleFamilyTreeForm}>Cancel</Button>
        </div>
      ) : (
        <div>
          <Button onClick={toggleFamilyTreeForm}>Create New Family Tree</Button>
        </div>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    familyTrees: state.getFamilyTrees.res ? state.getFamilyTrees.res.data : [],
    familyMembers: state.getFamilyMembers.res ? state.getFamilyMembers.res.data : []
  };
}

export default connect(mapStateToProps, { getFamilyTrees, createFamilyTree, editFamilyTree, deleteFamilyTree, validateToken, getFamilyMembers })(HomePage);