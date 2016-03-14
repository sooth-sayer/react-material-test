import React from 'react';

const Test = React.createClass({
  render: function() {
    return <div>
      {this.props.children}
    </div>;
  },
});

export default Test;
