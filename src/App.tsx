import React from 'react';
import './app.scss';
import { Router } from './router'
import { Home } from './views/Home';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
