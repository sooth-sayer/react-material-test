import React from 'react';
require('./stylesheets/app.styl');

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/app';

import routes from './router/routes';
import Router from './Router';

const store = createStore(reducers);

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

render(
  <Provider store={store}>
    <Router root={routes} />
  </Provider>,
  document.getElementById('example')
);
