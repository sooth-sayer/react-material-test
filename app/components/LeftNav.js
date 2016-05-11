import React from 'react';
import Drawer from 'material-ui/Drawer';
import Header from './LeftNav/Header';

const leftNav = ({ open, onToggle, children }) => (
  <Drawer
    open={open}
    docked={false}
    onRequestChange={onToggle}
  >
    <Header />
    {children}
  </Drawer>
);

leftNav.propTypes = {
  open: React.PropTypes.bool.isRequired,
  onToggle: React.PropTypes.func,
  children: React.PropTypes.array,
};

export default leftNav;
