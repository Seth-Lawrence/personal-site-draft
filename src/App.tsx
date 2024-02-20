import './App.css';

import Navigation from './Navigation';
import LeftNav from './LeftNav';
import Homepage from './Homepage';
import React, { useState } from 'react';


function App() {

  const [showAbout, setShowAbout] = useState<Boolean>(true);
  const [showResume, setShowResume] = useState<Boolean>(false);
  const [showProjects, setShowProjects] = useState<Boolean>(false);
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  function redirect(evt: React.MouseEvent, path: string): void {
    evt.preventDefault();
    window.open(path);
  }

  return (
    <div>
        <Navigation redirect={redirect} />
        <Homepage />
        <LeftNav />
    </div>
  );
}

export default App;
