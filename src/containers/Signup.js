import {connect} from 'react-redux';
import {signUp, setSessionError} from 'actions/session';
import Signup from 'components/Signup';

const mapStateToProps = ({session}) => ({
  error: session.error,
});

const mapDispatchToProps = dispatch => ({
  setError: error => dispatch(setSessionError(error)),
  signUp: params => dispatch(signUp(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup);
