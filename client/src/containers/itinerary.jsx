import React from 'react';

const Itinerary = ({ restart, info }) => {
  return (
    <div>
      <h1>Itinerary</h1>
      <div>
        {info.itinerary &&
          info.itinerary.map(it => (
            <div key={it.id}>
              <h1>{it.name}</h1>
              <p>{it.description}</p>
              <p>
                <i>{it.additionalInformation}</i>
              </p>
            </div>
          ))}
      </div>
      <button>print</button>
      <button>send to email</button>
      <button onClick={restart}>restart</button>
    </div>
  );
};

export default Itinerary;
