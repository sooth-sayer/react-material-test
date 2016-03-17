import React from 'react';
require('./stylesheets/app.styl');

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/app';

import { Router, Route, browserHistory } from 'react-router';

import App from './components/App';
import Products from './containers/Products';

const store = createStore(reducers);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="products" component={Products} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('example')
);
