import './App.css';

import Navigation from './Navigation';

import Homepage from './Homepage';
import React, { useState } from 'react';


function App() {

  const [showAbout, setShowAbout] = useState(true);
  const [showResume, setShowResume] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

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
