import './App.css';
import { About } from './components/About';
import { Hero } from './components/Hero';
import { Indo } from './components/Indo';
import { NavBar } from './components/NavBar';
import { Project } from './components/Project';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className="wrapper">
      <NavBar />
      <Hero />
      <Indo />
      <Skills />
      <Project />
      <About />
    </div>
  );
}

export default App;
