import {connect} from 'react-redux';
import Week from 'components/Week';

const mapStateToProps = ({session, data}) => ({
  state: session.state,
  daily: data.daily,
});

export default connect(mapStateToProps)(Week);
