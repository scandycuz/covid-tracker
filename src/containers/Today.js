import {connect} from 'react-redux';
import Today from 'components/Today';

const mapStateToProps = ({session, data}) => ({
  state: session.state,
  daily: data.daily,
});

export default connect(mapStateToProps)(Today);
