import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import MenuItem from 'material-ui/lib/menus/menu-item';
import LeftNav from './LeftNav';

import { getCurrentRouteDescription } from '../helpers/navigation';

class App extends React.Component {
  constructor() {
    super();
    this.state = { open: false };
  }

  toggleLeftNav = (open) => {
    this.setState({ open: open });
  }

  openLeftNav = () => {
    this.toggleLeftNav(true);
  }

  gotoProducts = () => {
    this.toggleLeftNav(false);
    this.context.router.push('/products');
  }

  gotoFeedback = () => {
    this.toggleLeftNav(false);
    this.context.router.push('/feedback');
  }

  render() {
    const title = getCurrentRouteDescription(this.context.router);

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
