import { ListGroupItem, ListGroupItemHeading, Fade } from 'reactstrap';
import { connect } from 'react-redux';
import { selectFamilyTree } from '../actions';

import SelectedFamilyTree from './SelectedFamilyTree';

function FamilyTree(props) {
    return props.tree.id === props.selectedTreeID ? <SelectedFamilyTree tree={props.tree}/> : (
        <ListGroupItem className="family-tree" data-id={props.tree.id} onClick={e => {
            props.selectFamilyTree(props.tree.id);
        }}>
            <ListGroupItemHeading>{props.tree.name}</ListGroupItemHeading>
        </ListGroupItem>
    );
}

function mapStateToProps(state) {
    return {
        selectedTreeID: state.selectFamilyTree.selectedTreeID
    };
}

export default connect(mapStateToProps, { selectFamilyTree })(FamilyTree);