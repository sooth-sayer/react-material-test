// @flow

import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Paper from 'material-ui/lib/paper';
import LeftNav from './LeftNav';

import { findRoute } from '../helpers/navigation';

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
      this.context.router.push('/products');
    };

  gotoFeedback: { (): void } =
    () => {
      this.toggleLeftNav(false);
      this.context.router.push('/feedback');
    };

  render() {
    const route = findRoute((path) => this.context.router.isActive(path));
    const title = route.description;

    return (
      <div className='app-container'>
        <AppBar
          title={title}
          onLeftIconButtonTouchTap={this.openLeftNav}
        >
          <LeftNav
            open={this.state.open}
            onToggle={this.toggleLeftNav}
          >
            <MenuItem onTouchTap={this.gotoProducts}>Products</MenuItem>
            <MenuItem onTouchTap={this.gotoFeedback}>Feedback</MenuItem>
          </LeftNav>
        </AppBar>
        <Paper className='app-body' zDepth={0}>
          {this.props.children}
        </Paper>
      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object,
};

export default App;
