import React from 'react';
import Navbar from './components/navbar';
import About from './components/about';
import Skills from './components/skills'
import Projects from './components/project';
import Contact from './components/contact';


function App() {
  return (
    <div>
      <Navbar />
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;