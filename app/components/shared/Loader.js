import React from 'react';

const loader = (props) => (
  <div style={{ display: 'flex' }} {...props}>
    <svg className='loader-wrapper' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' >
      <g className='loader'>
        <circle cx='50%' cy='50%' />
      </g>
    </svg>
  </div>
);

loader.propTypes = {
  style: React.PropTypes.object,
};

export default loader;
