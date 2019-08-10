import React from 'react';
import langSrc from '../assets/question.svg';

const Itinerary = ({ restart, info }) => {
  return (
    <div
      className="choice-page"
      style={{ backgroundImage: `url('${langSrc}')` }}>
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
