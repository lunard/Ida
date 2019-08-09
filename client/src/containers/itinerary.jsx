import React from 'react';

const Itinerary = ({ restart }) => {
  return (
    <div>
      <h1>Itinerary</h1>
      <ul>
        <li>Museum in Meran</li>
        <li>Hiking in Schenna</li>
        <li>Dinner at Lido Schenna</li>
      </ul>
      <button>print</button>
      <button>send to email</button>
      <button onClick={restart}>restart</button>
    </div>
  );
}

export default Itinerary;
