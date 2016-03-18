import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import Header from './LeftNav/Header';

const leftNav = ({ open, children, onToggle }) => (
  <LeftNav
    open={open}
    docked={false}
    onRequestChange={onToggle}
  >
    <Header />
    {children}
  </LeftNav>
);

export default leftNav;
