import { connect } from 'react-redux';
// import { game } from '../actions';
import GameOver from '../../components/GameOver/GameOver';
import {restart} from '../actions'

const getWinner = (score) => {
  if (score.white>score.black) return 'White';
  if (score.black>score.white) return 'Black';
  return 'draw';
}

const mapStateToProps = (state, ownProps) => ({
  winner:getWinner(state.score),
  score:state.score
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  restart:() => dispatch(restart())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameOver)