import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import App from './components/App';
import Products from './containers/Products';
import Product from './containers/Products/Product';
import Feedback from './containers/Feedback';

const router = ({ root }) => (
  <Router history={browserHistory}>
    <Route path={root.path} component={App}>
      <IndexRedirect to={root.routes.products.path} />
      <Route path={root.routes.products.path} component={Products}>
        <Route path={root.routes.products.routes.product.path} component={Product} />
      </Route>
      <Route path={root.routes.feedback.path} component={Feedback} />
    </Route>
  </Router>
);

router.propTypes = {
  root: React.PropTypes.object.isRequired,
};

export default router;
