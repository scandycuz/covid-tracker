import {connect} from 'react-redux';
import Home from 'components/Home';

const mapStateToProps = ({session}) => ({
  user: session.user,
});

export default connect(mapStateToProps)(Home);
