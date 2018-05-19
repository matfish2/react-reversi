import { connect } from 'react-redux';
import Game from '../../components/Game/Game';

const mapStateToProps = (state, ownProps) => ({
  currentPlayer:state.currentPlayer,
  board:state.board,
  lostTurn:state.lostTurn
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)