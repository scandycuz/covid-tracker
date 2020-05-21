import {connect} from 'react-redux';
import Cumulative from 'components/Cumulative';

const mapStateToProps = ({session, data}) => ({
  state: session.state,
  daily: data.daily,
});

export default connect(mapStateToProps)(Cumulative);
