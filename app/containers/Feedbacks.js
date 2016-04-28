import { connect } from 'react-redux';
import Feedbacks from '../components/Feedbacks';

function mapStateToProps(state) {
  return {...state};
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Feedbacks);
