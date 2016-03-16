import keyMirror from 'keyMirror';

export const types = keyMirror({
  CREATE: null,
});

export function create(product) {
  return { type: types.CREATE, product };
}
