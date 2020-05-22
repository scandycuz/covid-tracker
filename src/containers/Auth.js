import {connect} from 'react-redux';
import {logIn, signUp, setSessionError} from 'actions/session';
import Auth from 'components/Auth';

const mapStateToProps = ({session}) => ({
  error: session.error,
});

const mapDispatchToProps = dispatch => ({
  setError: error => dispatch(setSessionError(error)),
  signUp: params => dispatch(signUp(params)),
  logIn: params => dispatch(logIn(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auth);
