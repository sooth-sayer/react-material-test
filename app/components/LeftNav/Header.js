import React from 'react';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';

const header = ({ style, theme }) => {
  const containerStyle = {
    height: theme.appBar.height,
    background: theme.palette.primary1Color,
    ...style,
  };

  const avatarBackgroundColor = theme.palette.primary1Color;
  const textColor = theme.palette.alternateTextColor;

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
  theme: React.PropTypes.object.isRequired,
};

export default header;
