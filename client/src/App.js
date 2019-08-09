import React from 'react';
import './App.css';

const version = 1;

function App() {
  return (
    <div className="App">
      <h1>IDA {version}</h1>
      <button onClick={() => window.testElectron()}>test</button>
    </div>
  );
}

export default App;
