import React from 'react';
import langSrc from '../assets/question.svg';
import girlSrc from '../assets/girl.png';
import mapSrc from '../assets/Map.png';


const Itinerary = ({ restart, info }) => {
  return (
    <div
      className="choice-page"
      style={{ backgroundImage: `url('${langSrc}')` }}>
      <img className="iti-girl" src={girlSrc} />
      <div className="itinerary">
        {info.itinerary &&
          info.itinerary.map(it => (
            <div className="iti" key={it.id}>
              <h1>{it.name}</h1>
              <p>{it.description}</p>
              <h2>Advice</h2>
              <div>
                <i>{it.additionalInformation}</i>
              </div>
            </div>
          ))}
          <br />
          <br />
          <img src={mapSrc} />
      </div>
    </div>
  );
};

export default Itinerary;
