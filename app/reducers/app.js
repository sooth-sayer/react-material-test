import { combineReducers } from 'redux';
import products from './products';
import feedbacks from './feedbacks';

const app = combineReducers({
  products,
  feedbacks,
});

export default app;
