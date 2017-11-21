import React from 'react';

const DuotoneFilter = () => (
  <svg aria-hidden="true" style={{width:0, height:0, position: 'absolute', zIndex: -2}}>
    <defs>
      <filter colorInterpolationFilters="sRGB" id="duotone">
        <feColorMatrix type="matrix" values="0.95 0 0 0 0.05 0.65 0 0 0 0.15 0.15 0 0 0 0.50 0 0 0 1 0"></feColorMatrix>
      </filter>
    </defs>
  </svg>
)

export default DuotoneFilter;