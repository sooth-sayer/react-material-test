import React from 'react';

const Test = React.createClass({
  render: function() {
    return <div>
      This is test
      {this.props.children}
    </div>;
  },
});

export default Test;
