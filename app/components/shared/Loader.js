import _ from 'lodash';
import React from 'react';

function getCircleStyle(props) {
  const stroke = _.get(props, 'style.stroke');
  return { stroke: stroke };
}

const loader = (props) => (
  <div style={{ display: 'flex' }} {...props}>
    <svg className='loader-wrapper' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' >
      <g className='loader'>
        <circle cx='50%' cy='50%' style={getCircleStyle(props)}/>
      </g>
    </svg>
  </div>
);

loader.propTypes = {
  style: React.PropTypes.object,
};

export default loader;
