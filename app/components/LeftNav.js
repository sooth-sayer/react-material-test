import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import Header from './LeftNav/Header';

const leftNav = ({ open, onToggle, children }) => (
  <LeftNav
    open={open}
    docked={false}
    onRequestChange={onToggle}
  >
    <Header />
    {children}
  </LeftNav>
);

leftNav.propTypes = {
  open: React.PropTypes.bool.isRequired,
  onToggle: React.PropTypes.func,
};

export default leftNav;
