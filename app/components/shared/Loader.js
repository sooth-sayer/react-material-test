import React from 'react';

function getTransform(scale) {
   return `scale(${scale || 1})`;
}

const loader = ({ scale }) => (
  <svg className='loader-wrapper' width='40' height='40' xmlns='http://www.w3.org/2000/svg' style={{ transform: getTransform(scale) }}>
    <g className='loader'>
      <circle cx='50%' cy='50%' />
    </g>
  </svg>
);

loader.propTypes = {
  scale: React.PropTypes.number,
};

export default loader;
