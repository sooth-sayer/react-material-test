import React from 'react';

const Test = React.createClass({
  render: function() {
    return <div className="test">
      {this.props.children}
    </div>;
  },
});

export default Test;
