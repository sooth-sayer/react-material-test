import { types } from '../actions/products';

const initialState = {
  products: [
    { id: 1, name: 'Some amazing product', price: '10' },
    { id: 2, name: 'Boeing 737', price: '1000' },
    { id: 3, name: 'New Zeland', price: '10000' },
    { id: 4, name: 'Matches', price: '1' },
    { id: 5, name: 'Cayo Iguano', price: '1000000' },
    { id: 6, name: 'Lamborgini', price: '1000000' },
    { id: 7, name: 'Gibson', price: '10000' },
  ],
  sortColumn: 'id',
  sortOrder: 'asc',
};

function products(state = initialState, action) {
  switch(action.type) {
  case types.CREATE:
    return Object.assign({}, {
      ...state,
      products: state.products.concat([ action.product ]),
    });

  case types.SORT:
    const column = action.column;
    return Object.assign({}, {
      ...state,
      sortColumn: column,
      sortOrder: getSortOrder(state, column),
    });

  default:
    return state;
  }
}

function getSortOrder(state, column) {
  const columnChanged = state.sortColumn !== column;
  if (columnChanged) {
    return 'asc';
  } else {
    return state.sortOrder === 'asc' ? 'desc' : 'asc';
  }
}

export default products;
