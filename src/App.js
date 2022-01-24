import './App.css';
import Hero from './components/hero.js'
import About from './components/about.js'
import Projects from './components/projects';

function App() {
  return (
    <div className="mainContainer">
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default App;

