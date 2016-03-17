import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import Avatar from 'material-ui/lib/avatar';
import FontIcon from 'material-ui/lib/font-icon';

function getLeftNavHeaderStyle(theme) {
  return {
    height: theme.appBar.height,
    background: theme.rawTheme.palette.primary3Color,
  };
}

function getAvatarBackgroundColor(theme) {
  return theme.rawTheme.palette.accent1Color;
}

const leftNav = ({ open, children, onToggle }) => {
  let theme = getMuiTheme();

  return (
      <LeftNav
        open={open}
        docked={false}
        onRequestChange={onToggle}
      >
        <div className="leftNavHeader" style={getLeftNavHeaderStyle(theme)}>
          <Avatar
            className="avatar"
            icon={<FontIcon className="material-icons">account_box</FontIcon>}
            backgroundColor={getAvatarBackgroundColor(theme)}
          />
          <span>Welcome, User!</span>
        </div>
        {children}
      </LeftNav>
  );
};

export default leftNav;
