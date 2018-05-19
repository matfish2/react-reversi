import { connect } from 'react-redux';
// import { game } from '../actions';
import Score from '../../components/Score/Score';

const mapStateToProps = (state, ownProps) => ({
  score: state.game.score[ownProps.player],
})

const mapDispatchToProps = (dispatch, ownProps) => ({
//   onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Score)