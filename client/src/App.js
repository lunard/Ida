import React, { useState } from 'react';
import './App.css';

import Language from './containers/language';
import Welcome from './containers/welcome';
import Camera from './containers/camera';
import Choice from './containers/choice';
import Itinerary from './containers/itinerary';

const version = 1;

function App() {
  const [view, setView] = useState(0);
  const [info, setData] = useState({});
  const [questions, setQuestions] = useState(null);
  const next = (e, d) => {
    setView(view + 1);
    d && setData(d);
  }
  const done = (questions, result) => {
    setQuestions(questions);
    setData(result);
    next();
  };
  const restart = () => setView(0);
  return (
    <div className="App">
      {view === 0 && <Language next={next} />}
      {view === 1 && <Camera next={next} done={done} />}
      {view === 2 && <Choice questions={questions} info={info} next={next} />}
      {view === 3 && <Itinerary restart={restart} info={info} />}
    </div>
  );
}

export default App;
