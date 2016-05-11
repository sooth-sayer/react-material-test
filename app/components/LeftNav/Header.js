import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';

const header = ({ style }) => {
  const theme = getMuiTheme();

  const containerStyle = {
    height: theme.appBar.height,
    background: theme.rawTheme.palette.primary1Color,
    ...style,
  };

  const avatarBackgroundColor = theme.rawTheme.palette.primary1Color;
  const textColor = theme.rawTheme.palette.alternateTextColor;

  return (
    <div className="leftNavHeader" style={containerStyle}>
      <Avatar
        className="avatar"
        icon={<FontIcon className="material-icons">account_box</FontIcon>}
        backgroundColor={avatarBackgroundColor}
      />
      <span style={{ color: textColor }}>Welcome, User!</span>
    </div>
  );
};

header.propTypes = {
  style: React.PropTypes.object,
};

export default header;
