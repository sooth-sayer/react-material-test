// @flow

import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import MenuItem from 'material-ui/lib/menus/menu-item';
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
      <div>
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
        {this.props.children}
      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object,
};

export default App;
