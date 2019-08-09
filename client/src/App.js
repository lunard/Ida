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
  const next = () => setView(view + 1);
  const restart = () => setView(0);
  return (
    <div className="App">
      {view === 0 && <Language next={next} />}
      {view === 1 && <Welcome next={next} />}
      {view === 2 && <Camera next={next} />}
      {view === 3 && <Choice next={next} />}
      {view === 4 && <Itinerary restart={restart} />}
    </div>
  );
}

export default App;
