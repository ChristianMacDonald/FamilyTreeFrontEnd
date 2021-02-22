import { useEffect } from 'react';
import { connect } from 'react-redux';

import FamilyTreeList from '../components/FamilyTreeList';

import { validateToken, getFamilyTrees } from '../actions';

import './HomePage.css';
import { Card, CardHeader } from 'reactstrap';

function HomePage(props) {
	useEffect(() => {
		props.validateToken();
		props.getFamilyTrees();
	}, []);

	return (
		<div>
			<FamilyTreeList familyTrees={props.familyTrees}/>
		</div>
	);
}

function mapStateToProps(state) {
	return { familyTrees: state.getFamilyTrees.res ? state.getFamilyTrees.res.data : [] };
}

export default connect(mapStateToProps, { validateToken, getFamilyTrees })(HomePage);

// function HomePage(props) {
//   useEffect(() => {
//     props.validateToken();
//     props.getFamilyTrees();
//   }, []);

//   const [selectedFamilyTree, setSelectedFamilyTree] = useState({});
//   const [familyTreeFormToggle, setFamilyTreeFormToggle] = useState(false);
//   const [familyTreeName, setFamilyTreeName] = useState('');
//   const [editing, setEditing] = useState(false);
//   const [familyMemberFormToggle, setFamilyMemberFormToggle] = useState(false);

//   const updateFamilyTreeName = e => {
//     setFamilyTreeName(e.target.value);
//   };

//   const changeSelectedTree = e => {
//     const treeID = parseInt(e.target.dataset.id);
//     setSelectedFamilyTree(props.familyTrees.find(tree => tree.id === treeID));
//     props.getFamilyMembers(treeID);
//   };

//   const deselectFamilyTree = () => {
//     setSelectedFamilyTree({});
//   };

//   const toggleFamilyTreeForm = () => {
//     setFamilyTreeFormToggle(!familyTreeFormToggle);
//   };

//   const toggleFamilyMemberForm = () => {
//     setFamilyMemberFormToggle(!familyMemberFormToggle);
//   };

//   const toggleEditing = () => {
//     setEditing(!editing);
//   };

//   const createFamilyMember = e => {
//     e.preventDefault();

//     const mother = e.target.mother.value === '-1' ? null : parseInt(e.target.mother.value);
//     const father = e.target.father.value === '-1' ? null : parseInt(e.target.father.value);
//     const age = e.target.age.value === '' ? null : parseInt(e.target.age.value);
//     const gender = e.target.gender.value === '' ? null : e.target.gender.value;
//     const suffix = e.target.suffix.value === '' ? null : e.target.suffix.value;

//     props.createFamilyMember({
//       family_tree_id: selectedFamilyTree.id,
//       mother_id:      mother,
//       father_id:      father,
//       first_name:     e.target['first-name'].value,
//       last_name:      e.target['last-name'].value,
//       suffix:         suffix,
//       age:            age,
//       gender:         gender
//     });
//   };

//   const deleteFamilyMember = e => {
//     props.deleteFamilyMember(selectedFamilyTree.id, e.target.dataset.id);
//   };

//   return editing ? (
//     <div id="home-page">
//       <h1>{`Edit ${selectedFamilyTree.name}`}</h1>
//       <br/>
//       <Card id="ftef-card">
//         <Form id="family-tree-editing-form" onSubmit={e => {
//           e.preventDefault();
//           props.editFamilyTree(selectedFamilyTree.id, { name: familyTreeName });
//         }}>
//           <FormGroup>
//             <Label for="ftef-name">Name</Label>
//             &nbsp;
//             <Input type="text" defaultValue={selectedFamilyTree.name} name="name" id="ftef-name" onChange={updateFamilyTreeName}/>
//           </FormGroup>
//           <Input type="submit" id="ftef-submit"/>
//         </Form>
//       </Card>
//       <br/>
//       <Button onClick={toggleEditing}>Cancel</Button>
//     </div>
//   ) : (
//     <div id="home-page">
//       <h1>Family Trees</h1>
//       <br/>
//       <Card id="family-tree-list-card">
//         <ListGroup id="family-tree-list">
//           {props.familyTrees.map((familyTree, i) => {
//             return (
//               <div key={i}>
//                 {familyTree.id !== selectedFamilyTree.id ? (
//                   <ListGroupItem>
//                     <ListGroupItemHeading>{`Name: ${familyTree.name}`}</ListGroupItemHeading>
//                     <Button data-id={familyTree.id} onClick={changeSelectedTree}>Show More</Button>
//                   </ListGroupItem>
//                 ) : (
//                   <ListGroupItem>
//                     <ListGroupItemHeading>{`Name: ${familyTree.name}`}</ListGroupItemHeading>
//                     <br/>
//                     <ListGroupItemHeading>Family Members</ListGroupItemHeading>
//                     <hr/>
//                     <ListGroup id="family-member-list">
//                       {props.familyMembers.length > 0 ? props.familyMembers.map((member, i) => (
//                         <ListGroupItem key={i}>
//                           {`${member.first_name} ${member.last_name}`}
//                           &nbsp;
//                           <Button color="danger" data-id={member.id} onClick={deleteFamilyMember}>Delete</Button>
//                         </ListGroupItem>
//                       )) : 'No family members'}
//                     </ListGroup>
//                     <br/>
//                     {familyMemberFormToggle ? (
//                       <Form id="family-member-creation-form" onSubmit={createFamilyMember}>
//                         <FormGroup>
//                           <Label for="fmcf-first-name">First Name</Label>
//                           <Input type="text" name="first-name" id="fmcf-first-name"/>
//                         </FormGroup>
//                         <FormGroup>
//                           <Label for="fmcf-last-name">Last Name</Label>
//                           <Input type="text" name="last-name" id="fmcf-last-name"/>
//                         </FormGroup>
//                         {props.familyMembers.length > 1 ? (
//                           <FormGroup>
//                             <Label for="fmcf-mother">Mother</Label>
//                             <Input type="select" name="mother" id="fmcf-mother">
//                               <option value="-1"></option>
//                               {props.familyMembers.map((familyMember, i) => <option key={i} value={familyMember.id}>{`${familyMember.first_name} ${familyMember.last_name}`}</option>)}
//                             </Input>
//                           </FormGroup>
//                         ) : null}
//                         {props.familyMembers.length > 1 ? (
//                           <FormGroup>
//                             <Label for="fmcf-father">Father</Label>
//                             <Input type="select" name="father" id="fmcf-father">
//                               <option value="-1"></option>
//                               {props.familyMembers.map((familyMember, i) => {
//                                 return (
//                                   <option key={i} value={familyMember.id}>{`${familyMember.first_name} ${familyMember.last_name}`}</option>
//                                 );
//                               })}
//                             </Input>
//                           </FormGroup>
//                         ) : null}
//                         <FormGroup>
//                           <Label for="fmcf-suffix">Suffix</Label>
//                           <Input type="select" name="suffix" id="fmcf-suffix">
//                             {['', 'Jr.', 'Sr.', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'].map((suffix, i) => {
//                               return (
//                                 <option key={i} value={suffix}>{suffix}</option>
//                               );
//                             })}
//                           </Input>
//                         </FormGroup>
//                         <FormGroup>
//                           <Label for="fmcf-age">Age</Label>
//                           <Input type="number" name="age" id="fmcf-age"/>
//                         </FormGroup>
//                         <FormGroup>
//                           <Label for="fmcf-gender">Gender</Label>
//                           <Input type="text" name="gender" id="fmcf-gender"/>
//                         </FormGroup>
//                         <Input type="submit"/>
//                       </Form>
//                     ) : <Button onClick={toggleFamilyMemberForm}>Create New Family Member</Button>}
//                     <br/>
//                     <Button color="info" onClick={() => {
//                       toggleEditing();
//                     }}>Edit</Button>
//                     &nbsp;
//                     <Button color="danger" data-id={familyTree.id} onClick={e => {
//                       props.deleteFamilyTree(parseInt(e.target.dataset.id));
//                     }}>Delete</Button>
//                     &nbsp;
//                     <Button onClick={deselectFamilyTree}>Show Less</Button>
//                   </ListGroupItem>
//                 )}
//               </div>
//             );
//           })}
//         </ListGroup>
//       </Card>
//       <br/>
//       {familyTreeFormToggle ? (
//         <div>
//           <Card id="ftcf-card">
//             <Form id="family-tree-creation-form" onSubmit={e => {
//               e.preventDefault();
//               props.createFamilyTree({ name: familyTreeName });
//             }}>
//               <FormGroup>
//                 <Label for="ftcf-name">Name</Label>
//                 &nbsp;
//                 <Input type="text" name="name" id="ftcf-name" onChange={updateFamilyTreeName}/>
//               </FormGroup>
//               <Input type="submit" id="ftcf-submit"/>
//             </Form>
//           </Card>
//           <br/>
//           <Button onClick={toggleFamilyTreeForm}>Cancel</Button>
//         </div>
//       ) : (
//         <div>
//           <Button onClick={toggleFamilyTreeForm}>Create New Family Tree</Button>
//         </div>
//       )}
//     </div>
//   );
// }