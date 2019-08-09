import React, { useRef } from 'react';

const Camera = ({ next }) => {
  return (
    <div>
      <h1>Camera</h1>
      <button onClick={next}>TAKE</button>
    </div>
  );
}

export default Camera;
