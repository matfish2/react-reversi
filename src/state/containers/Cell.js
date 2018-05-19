import { connect } from 'react-redux';
import Cell from '../../components/Cell/Cell';
import {reverse, toggleHoverState} from '../actions';

const mapStateToProps = (state, ownProps) => ({
    newest: state.newestDisk,
    player: state.currentPlayer
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    reverse: () => dispatch(reverse(ownProps.position)),
    toggleHoverState: (hovered) => dispatch(toggleHoverState(ownProps.position, hovered))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cell)