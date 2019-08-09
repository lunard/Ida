import React, { useState } from 'react';

const tree = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const Choice = ({ next }) => {
  const [current, setCurrent] = useState(0);
  const click = current === tree.length - 1
    ? next
    : () => setCurrent(current + 1);
  return (
    <div>
      <h1>What do you prefer?</h1>
      <div>
        <button onClick={click}>{tree[current][0]}</button>
        <button onClick={click}>{tree[current][1]}</button>
      </div>
    </div>
  );
}

export default Choice;
