import { connect } from 'react-redux';
// import { game } from '../actions';
import App from '../../App';

const mapStateToProps = (state, ownProps) => ({
  status:state.game.status
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  restartGame:() => dispatch({
       type:'RESTART_GAME' 
    }),
  
  endGame:() => dispatch({
    type:'GAME_OVER'
  })
//   onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)