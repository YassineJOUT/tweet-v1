import React from 'react';
import './App.css';
import Nav from './components/Nav'
import InteractionContainer from './components/InteractionContainer'
import ResultContainer from './components/ResultContainer'
function App() {
  return (
    <div className="App">
      <Nav name="Detecting malicous spam" />
      <InteractionContainer />
      <ResultContainer />
    </div>
  );
}

export default App;
