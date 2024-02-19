import './App.css';

import Navigation from './Navigation';

import Homepage from './Homepage';
import React from 'react';


function App() {

  function redirect(evt: React.MouseEvent, path: string): void {
    evt.preventDefault();
    window.open(path);
  }

  return (
    <div>
        <Navigation redirect={redirect} />
        <Homepage />
    </div>
  );
}

export default App;
