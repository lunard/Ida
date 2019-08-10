import React, { useState } from 'react';
import $ from 'jquery';

import langSrc from '../assets/question.svg';
import idaSrc from '../assets/ida.png';

const tree = [[1, 2], [3, 4], [5, 6]];

const Choice = ({ questions, info, next }) => {
  const [qs, setQS] = useState(questions);
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState(0);
  const [results, setResults] = useState([]);
  /*
  const click = (result) => {
    const newResults = [...results, result];
    if (current === tree.length - 1) {
      setResults(newResults);
      setCurrent(current + 1);
    } else {
      setLoading(true);
      const dataToPost = {...info, results: newResults };
      console.log('SENDING', dataToPost);
      $.post({
        url: '',
        data: info,
      })
        .done((itinerary) => {
          console.log(itinerary);
          next();
        })
        .fail((err) => {
          setLoading(false);
        });
    }
  };
  */

  const select = newQs => {
    const newResults = [...results, newQs.id];
    if (newQs.nextQuestion1 && newQs.nextQuestion2) {
      setQS(newQs);
      setResults(newResults);
    } else {
      $.post({
        dataType: 'json',
        contentType: 'application/json',
        url:
          'https://lunard.ddns.net/NOI_Hackathon_Summer_Edition_2019/api/api/tourist/uniqueExperiences',
        data: JSON.stringify({ ...info, results: newResults }),
      })
        .done(itinerary => {
          console.log(itinerary);
          next(null, { itinerary });
        })
        .fail(err => {
          setLoading(false);
        });
    }
  };

  if (loading) return <div>loading</div>;

  return info ? (
    <div
      className="choice-page"
      style={{ backgroundImage: `url('${langSrc}')` }}
    >
      <div className="group-info">
        {info.groupType && (
          <div>
            <span className="group-label">Group type</span>
            <span className="group-value">{info.groupType.name}</span>
          </div>
        )}
        {info.people &&
          info.people.map((p, i) => (
            <div key={i}>
              <span className="group-label">Gender</span>
              <span className="group-value">{p.gender.name}</span>
              <span className="group-label">Emotion</span>
              <span className="group-value">{p.emotion.name}</span>
              <span className="group-label">Age</span>
              <span className="group-value">{p.age}</span>
            </div>
          ))}
      </div>
      <div className="questions">
        <div
          onClick={() => select(qs.nextQuestion1)}
          style={{
            backgroundImage: `linear-gradient(0deg,rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url('${qs.nextQuestion1.imageUrl}')`,
          }}
        >
          {qs.nextQuestion1.q}
        </div>
        <img src={idaSrc} />
        <div
          onClick={() => select(qs.nextQuestion2)}
          style={{
            backgroundImage: `linear-gradient(0deg,rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url('${qs.nextQuestion2.imageUrl}')`,
          }}
        >
          {qs.nextQuestion2.q}
        </div>
      </div>
    </div>
  ) : (
    <div />
  );
};

export default Choice;
