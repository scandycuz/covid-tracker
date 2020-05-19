import {connect} from 'react-redux';
import {setUser, setInitializing} from 'actions/session';
import App from 'components/App';

const mapStateToProps = ({session}) => ({
  user: session.user,
  initializing: session.initializing,
});

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user)),
  setInitializing: status => dispatch(setInitializing(status)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
