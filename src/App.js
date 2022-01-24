import './App.css';
import Hero from './components/hero.js'
import About from './components/about.js'
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="mainContainer">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer /> 
    </div>
  );
}

export default App;

