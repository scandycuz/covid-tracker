import {connect} from 'react-redux';
import {setState} from 'actions/session';
import Header from 'components/Header';

const mapStateToProps = ({session, data}) => ({
  state: session.state,
});

const mapDispatchToProps = dispatch => ({
  setState: state => dispatch(setState(state)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
