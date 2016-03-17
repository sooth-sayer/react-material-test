import _ from 'lodash';
import root from '../router/routes';

export function getCurrentRouteDescription(router) {
  return getDescriptionFromTree(router, root);
}

function getDescriptionFromTree(router, root, depth=1) {
  const routes = root.routes && Object.keys(root.routes);
  if (depth > 0 && !_.isEmpty(routes)) {
    for(let i = 0; i < routes.length; ++i) {
      const route = root.routes[routes[i]];
      const res = getDescriptionFromTree(router, route, depth-1);
      if (res) {
        return res;
      }
    }
  }

  if (router.isActive(root.path)) {
    return root.description;
  }

  return null;
}
