import './App.css';
import Hero from './components/hero.js'
import About from './components/about.js'
import Projects from './components/projects';
import Contact from './components/contact';

function App() {
  return (
    <div className="mainContainer">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

