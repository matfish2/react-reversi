import { connect } from 'react-redux';
// import { game } from '../actions';
import Cell from '../../components/Cell/Cell';

const mapStateToProps = (state, ownProps) => ({
    newest: state.game.newestDisk,
    player: state.game.currentPlayer
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    reverse: () => dispatch({type:'REVERSE',x:ownProps.position[0], y:ownProps.position[1]}),
    toggleHoverState: () => dispatch({type:'TOGGLE_CELL_HOVER',x:ownProps.position[0], y:ownProps.position[1]})
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cell)