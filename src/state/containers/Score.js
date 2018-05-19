import { connect } from 'react-redux';
import Score from '../../components/Score/Score';

const mapStateToProps = (state, ownProps) => ({
  score: state.score[ownProps.player],
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Score)