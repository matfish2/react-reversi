import { connect } from 'react-redux';
// import { game } from '../actions';
import Game from '../../components/Game/Game';

const mapStateToProps = (state, ownProps) => ({
  currentPlayer:state.game.currentPlayer,
  board:state.game.board
})

const mapDispatchToProps = (dispatch, ownProps) => ({
//   onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)