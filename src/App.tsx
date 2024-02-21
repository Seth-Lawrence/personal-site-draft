import './App.scss';

import Navigation from './Navigation';
import LeftNav from './LeftNav';
import Homepage from './Homepage';
import React, { useState } from 'react';
import About from './About';
import Resume from './Resume';
import Projects from './Projects'



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

  function handleClick(section:string):void {
    setIsLoading(true);
    (showAbout && setShowAbout(false));
    (showResume && setShowResume(false));
    (showProjects && setShowProjects(false));

    switch (section.toLowerCase()) {
      case 'about':
        setShowAbout(true);
        break;
      case 'resume':
        setShowResume(true);
        break;
      case 'projects':
        setShowProjects(true);
        break;
      default:
        setShowAbout(true);
    }

    setIsLoading(false);
  }

  return (
    <section className='App'>
      <aside>
        <Navigation redirect={redirect} />
        <Homepage />
        <LeftNav handleClick={handleClick} />
      </aside>
      <section>
        {
        (showAbout && <About />)
        || (showResume && <Resume />)
        || (showProjects && <Projects />)}
      </section>
    </section>
  );
}

export default App;
