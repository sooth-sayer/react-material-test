import keyMirror from 'keyMirror';

export const types = keyMirror({
  CREATE: null,
  SORT: null,
});

export function create(product) {
  return { type: types.CREATE, product };
}

export function sort(column) {
  return { type: types.SORT, column };
}
