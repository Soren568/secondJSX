import './App.css';
import React from 'react';

import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Jane" lastName="Doe" age="45" hair="Black"/>
      <PersonCard firstName="John" lastName="Smith" age="88" hair="Brown"/>
      <PersonCard firstName="Millard" lastName="Fillmroe" age="50" hair="Brown"/>
      <PersonCard firstName="Maria" lastName="Smith" age="45" hair="Black"/>
    </div>
  );
}

export default App;
