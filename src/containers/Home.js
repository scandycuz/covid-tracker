import {connect} from 'react-redux';
import {getState} from 'actions/session';
import Home from 'components/Home';

const mapStateToProps = ({session, data}) => ({
  user: session.user,
  state: session.state,
  daily: data.daily,
  loading: data.loading,
});

const mapDispatchToProps = dispatch => ({
  getState: () => dispatch(getState()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
