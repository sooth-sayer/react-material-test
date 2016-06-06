import _ from 'lodash';
import keyMirror from 'keyMirror';

const USER_GENERATOR_URL = 'https://randomuser.me/api';

export const types = keyMirror({
  FEEDBACK_CREATE: null,
  AVATAR_REQUEST: null,
  AVATAR_RECEIVE: null,
  AVATAR_RECEIVE_ERROR: null,
});

export function create(feedback) {
  return { type: types.FEEDBACK_CREATE, feedback };
}

export function generateAvatar() {
  return (dispatch) => {
    dispatch(requestAvatar());
    fetch(USER_GENERATOR_URL, { headers: 'Accept: application/json' })
    .then((res) => res.json())
    .then((res) => {
      const avatar = _.get(res, 'results[0].picture.medium');
      dispatch(receiveAvatar(avatar));
    })
    .catch((err) => {
      console.error('Error while receiving random user info:', err);
      dispatch(errorReceiveAvatar());
    });
  };
}

function requestAvatar() {
  return { type: types.AVATAR_REQUEST };
}

function receiveAvatar(avatar) {
  return { type: types.AVATAR_RECEIVE, avatar };
}

function errorReceiveAvatar() {
  return { type: types.AVATAR_RECEIVE_ERROR };
}
