import './App.scss';

import Navigation from './Navigation';
import LeftNav from './LeftNav';
import Homepage from './Homepage';
import React, { useState } from 'react';
import About from './components/About';
import Skills from './Skills';
import Projects from './Projects';
import Home from './Home'



function App() {

  const [showHome, setShowHome] = useState<Boolean>(true);
  const [showProjects, setShowProjects] = useState<Boolean>(false);
  const [showAbout, setShowAbout] = useState<Boolean>(false);
  const [showResume, setShowResume] = useState<Boolean>(false);
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  function redirect(evt: React.MouseEvent, path: string): void {
    evt.preventDefault();
    window.open(path);
  }

  //TODO: add function for showing a loading spinner

  function handleClick(section: 'about' | 'skills' | 'pojects' | 'home'): void {
    setIsLoading(true);
    (showHome && setShowHome(false));
    (showAbout && setShowAbout(false));
    (showResume && setShowResume(false));
    (showProjects && setShowProjects(false));

    //the case conditions need to match button text
    switch (section.toLowerCase()) {
      case 'about':
        setShowAbout(true);
        break;
      case 'skills':
        setShowResume(true);
        break;
      case 'projects':
        setShowProjects(true);
        break;
      case 'home':
        setShowHome(true);
        break;
      default:
        setShowHome(true);
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
          (showHome && <Home />)
          || (showAbout && <About />)
          || (showResume && <Skills />)
          || (showProjects && <Projects />)
        }
      </section>
    </section>
  );
}

export default App;
