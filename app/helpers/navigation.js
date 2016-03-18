import _ from 'lodash';
import root from '../router/routes';

export function findRoute(cb) {
  return findInTree(cb, root);
}

function findInTree(cb, root, depth=1) {
  const routes = root.routes && Object.keys(root.routes);
  if (depth > 0 && !_.isEmpty(routes)) {
    for(let i = 0; i < routes.length; ++i) {
      const route = root.routes[routes[i]];
      const res = findInTree(cb, route, depth-1);
      if (res) {
        return res;
      }
    }
  }

  if (cb(root.path)) {
    return root;
  }

  return null;
}
