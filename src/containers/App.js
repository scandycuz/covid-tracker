import {connect} from 'react-redux';
import {authChanged} from 'actions/session';
import App from 'components/App';

const mapStateToProps = ({session}) => ({
  user: session.user,
  initializing: session.initializing,
});

const mapDispatchToProps = dispatch => ({
  handleAuthChange: user => dispatch(authChanged(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
