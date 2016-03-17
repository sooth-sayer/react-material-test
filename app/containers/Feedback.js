import { connect } from 'react-redux';
import Feedback from '../components/Feedback';

function mapStateToProps(state) {
  return {...state};
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
