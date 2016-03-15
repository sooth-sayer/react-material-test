var React = require('react');
var ReactDOM = require('react-dom');

import * as styles from './stylesheets/app.styl';

import Test from './components/test.jsx';

ReactDOM.render(
  <Test>Hello, world!</Test>,
  document.getElementById('example')
);
