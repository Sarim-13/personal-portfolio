import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ElevenLabsVoiceWidget from './components/ElevenLabsVoiceWidget';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <ElevenLabsVoiceWidget className="fixed bottom-4 right-4 z-50" />
    </div>
  );
}

export default App;