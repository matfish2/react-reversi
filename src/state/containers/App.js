import { connect } from 'react-redux';
import App from '../../App';

const mapStateToProps = (state, ownProps) => ({
  status:state.status
})

const mapDispatchToProps = (dispatch, ownProps) => ({
 
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)