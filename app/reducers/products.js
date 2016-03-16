import { types } from '../actions/products';

const initialState = {
  products: [
    { id: 1, name: 'Some amazing product' },
  ],
};

function products(state = initialState, action) {
  switch(action.type) {
  case types.CREATE:
    return Object.assign(state, {
      products: state.products.concat([ action.product ]),
    });
  default:
    return state;
  }
}

export default products;
