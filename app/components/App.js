// @flow

import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import LeftNav from './LeftNav';

import { findRoute } from '../helpers/navigation';
import { productsPath, feedbackPath } from '../router/routes';

const theme = getMuiTheme();

class App extends React.Component {
  constructor() {
    super();
    this.state = { open: false };
  }

  toggleLeftNav: { (x: boolean): void } =
    (open) => {
      this.setState({ open: open });
    };

  openLeftNav: { (): void } =
    () => {
      this.toggleLeftNav(true);
    };

  gotoProducts: { (): void } =
    () => {
      this.toggleLeftNav(false);
      this.context.router.push(productsPath());
    };

  gotoFeedback: { (): void } =
    () => {
      this.toggleLeftNav(false);
      this.context.router.push(feedbackPath());
    };

  getBodyStyle() {
    return { marginTop: theme.appBar.height };
  }

  render() {
    const route = findRoute((path) => this.context.router.isActive(path));
    const title = route.description;

    return (
      <MuiThemeProvider muiTheme={theme}>
        <div className='app-container'>
          <AppBar
            title={title}
            onLeftIconButtonTouchTap={this.openLeftNav}
            style={{ position: 'fixed' }}
          >
            <LeftNav
              open={this.state.open}
              onToggle={this.toggleLeftNav}
              theme={theme}
            >
              <MenuItem onTouchTap={this.gotoProducts}>Products</MenuItem>
              <MenuItem onTouchTap={this.gotoFeedback}>Feedback</MenuItem>
            </LeftNav>
          </AppBar>
          <Paper className='app-body' zDepth={0} style={this.getBodyStyle()}>
            {this.props.children}
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object,
};

App.propTypes = {
  children: React.PropTypes.oneOfType([React.PropTypes.array, React.PropTypes.object]),
};

export default App;
