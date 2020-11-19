import React from 'react';

export const Loading = () => {
  return (
    <div className="loading">
      <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
        style={{
          margin: 'auto',
          display: 'block', shapeRendering: 'auto',
          position: 'absolute',
          left: '45%',
          top: '50%'
        }} width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <g>
          <path d="M50 15A35 35 0 1 0 74.74873734152916 25.251262658470843" fill="none" stroke="#de8f75" stroke-width="12"></path>
          <path d="M49 3L49 27L61 15L49 3" fill="#de8f75"></path>
          <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
        </g>
      </svg>
    </div>
  );
}
