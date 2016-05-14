import React from 'react';
import Drawer from 'material-ui/Drawer';
import Header from './LeftNav/Header';

const leftNav = ({ open, onToggle, children, theme }) => (
  <Drawer
    open={open}
    docked={false}
    onRequestChange={onToggle}
  >
    <Header theme={theme} />
    {children}
  </Drawer>
);

leftNav.propTypes = {
  open: React.PropTypes.bool.isRequired,
  onToggle: React.PropTypes.func,
  children: React.PropTypes.array,
  theme: React.PropTypes.object.isRequired,
};

export default leftNav;
