import React, { useState } from 'react';
import $ from 'jquery';

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

  const select = (newQs) => {
    const newResults = [...results, newQs.id];
    if (newQs.nextQuestion1 && newQs.nextQuestion2) {
      setQS(newQs);
      setResults(newResults);
    } else {
      $.post({
        dataType: 'json',
        contentType: 'application/json',
        url: 'https://lunard.ddns.net/NOI_Hackathon_Summer_Edition_2019/api/api/tourist/uniqueExperiences',
        data: JSON.stringify({...info, results: newResults }),
      })
        .done((itinerary) => {
          console.log(itinerary);
          next(null, { itinerary });
        })
        .fail((err) => {
          setLoading(false);
        });
    }
  };

  if (loading) return <div>loading</div>;

  console.log(results);

  return info ? (
    <div>
      {info.groupType && <div>Group type: {info.groupType.name}</div>}
      <ul>
        {info.people &&
          info.people.map((p, i) => (
            <li key={i}>
              gender:{p.gender.name} emotion:{p.emotion.name} age:{p.age}
            </li>
          ))}
      </ul>
      <h1>What do you prefer?</h1>
      <div>
        <button onClick={() => select(qs.nextQuestion1)}>{qs.nextQuestion1.q}</button>
        <button onClick={() => select(qs.nextQuestion2)}>{qs.nextQuestion2.q}</button>
      </div>
    </div>
  ) : (
    <div />
  );
};

export default Choice;
