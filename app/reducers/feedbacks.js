import { types } from '../actions/feedbacks';

const initialState = {
  feedbacks: [
    {name: 'Brendan Lim', feedback: ' -- I\'ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?', avatar: 'https://randomuser.me/api/portraits/med/men/40.jpg'},
    {name: 'Scott, Jennifer', feedback: ' -- Wish I could come, but I\'m out of town this weekend.', avatar: 'https://randomuser.me/api/portraits/med/men/14.jpg'},
    {name: 'Oui oui', feedback: ' -- Do you have Paris recommendations? Have you ever been?', avatar: 'https://randomuser.me/api/portraits/med/women/7.jpg'},
    {name: 'Birdthday gift', feedback: ' -- Do you have any ideas what we can get Heidi for her birthday? How about a pony?', avatar: 'https://randomuser.me/api/portraits/med/women/7.jpg'},
    {name: 'Barbara PA', avatar: 'https://randomuser.me/api/portraits/med/women/79.jpg', feedback: 'Oh, no you don\'t Nona! I\'ll take responsibility for not having enough kettles and drinking barbarian drinks like coffee more than tea, but not this one! I have never, ever heard of feedback used this way, despite the anonymous posters assertion that it is common. And I work with some of the most jargon-loving people you will ever meet. Feedback is not counted. If you receive feedback from many sources, you do not have feedbacks.↵↵It may be coming, but it is most certainly not here yet.'},
  ],
  feedbackAvatar: null,
  feedbackAvatarLoading: false,
  feedbackAvatarError: false,
};

function feedbacks(state = initialState, action) {
  switch(action.type) {
  case types.FEEDBACK_CREATE:
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
