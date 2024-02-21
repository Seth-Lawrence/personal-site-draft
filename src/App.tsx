import './App.scss';

import Navigation from './Navigation';
import LeftNav from './LeftNav';
import Homepage from './Homepage';
import React, { useState } from 'react';
import InfoBlock from './InfoBlock';




function App() {

  const [showAbout, setShowAbout] = useState<Boolean>(true);
  const [showResume, setShowResume] = useState<Boolean>(false);
  const [showProjects, setShowProjects] = useState<Boolean>(false);
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  function redirect(evt: React.MouseEvent, path: string): void {
    evt.preventDefault();
    window.open(path);
  }

  //TODO: add function for showing a loading spinner

  return (
    <>
      <div>
        <Navigation redirect={redirect} />
        <Homepage />
        <LeftNav
          setShowAbout={setShowAbout}
          setShowResume={setShowResume}
          setShowProjects={setShowProjects}
          setIsLoading={setIsLoading}
        />
      </div>
      <div>
        <InfoBlock module={showAbout || showResume || showProjects} />
      </div>
    </>
  );
}

export default App;
