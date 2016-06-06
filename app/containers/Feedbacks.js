import { connect } from 'react-redux';
import { create, generateAvatar } from '../actions/feedbacks';
import Feedbacks from '../components/Feedbacks';

function mapStateToProps(state) {
  return {...state.feedbacks};
}

function mapDispatchToProps(dispatch) {
  return {
    onSend: (name, feedback) => {
      dispatch(create({ name, feedback }));
    },
    onGenerateAvatar: () => {
      dispatch(generateAvatar());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Feedbacks);
