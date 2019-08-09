import React from 'react';

const Welcome = ({ next }) => {
  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={next}>take a picture</button>
    </div>
  );
};

export default Welcome;
