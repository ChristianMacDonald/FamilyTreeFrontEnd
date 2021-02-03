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

  const toggleEditing = () => {
    setEditing(!editing);
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
                  <ListGroupItem key={i}>
                    <ListGroupItemHeading>{`Name: ${familyTree.name}`}</ListGroupItemHeading>
                    <br/>
                    <ListGroupItemHeading>Family Members</ListGroupItemHeading>
                    <hr/>
                    <ListGroup>
                      {props.familyMembers.length > 0 ? props.familyMembers.map((member, i) => (
                        <ListGroupItem key={i}>
                          {`${member.first_name} ${member.last_name}`}
                        </ListGroupItem>
                      )) : 'No family members'}
                    </ListGroup>
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