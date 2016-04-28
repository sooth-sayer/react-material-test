import { types } from '../actions/products';

const initialState = {
  feedbacks: [
    { id: 1, name: 'Savannah Caldwell', message: '' },
    { id: 2, name: 'Jimmie Willis', message: '' },
    { id: 3, name: 'Alice Hudson', message: '' },
    { id: 4, name: 'Crystal Pearson', message: '' },
  ],
};

function feedbacks(state = initialState, action) {
  switch(action.type) {
  case types.CREATE:
    return Object.assign({}, {
      ...state,
      feedbacks: state.feedbacks.concat([ action.feedback ]),
    });

  default:
    return state;
  }
}

export default feedbacks;
