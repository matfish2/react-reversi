import { connect } from 'react-redux';
// import { game } from '../actions';
import GameOver from '../../components/GameOver/GameOver';

const getWinner = (score) => {
  if (score.white>score.black) return 'White';
  if (score.black>score.white) return 'Black';
  return 'draw';
}

const mapStateToProps = (state, ownProps) => ({
  winner:getWinner(state.game.score),
  score:state.game.score
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  restart:() => dispatch({
       type:'RESTART_GAME' 
    })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameOver)