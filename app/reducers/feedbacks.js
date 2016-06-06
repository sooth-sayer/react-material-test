import { types } from '../actions/feedbacks';

const initialState = {
  feedbacks: [],
  feedbackAvatar: null,
  feedbackAvatarLoading: false,
  feedbackAvatarError: false,
};

function feedbacks(state = initialState, action) {
  switch(action.type) {
  case types.CREATE:
    return Object.assign({}, {
      ...state,
      feedbacks: state.feedbacks.concat([ {...action.feedback, avatar: state.feedbackAvatar} ]),
    });

  case types.AVATAR_RECEIVE:
    return Object.assign({}, {
      ...state,
      feedbackAvatar: action.avatar,
      feedbackAvatarLoading: false,
      feedbackAvatarError: false,
    });

  case types.AVATAR_REQUEST:
    return Object.assign({}, {
      ...state,
      feedbackAvatarLoading: true,
      feedbackAvatar: null,
      feedbackAvatarError: false,
    });

  case types.AVATAR_RECEIVE_ERROR:
    return Object.assign({}, {
      ...state,
      feedbackAvatar: null,
      feedbackAvatarLoading: false,
      feedbackAvatarError: true,
    });

  default:
    return state;
  }
}

export default feedbacks;
