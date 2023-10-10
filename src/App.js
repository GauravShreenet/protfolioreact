import './App.css';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Indo } from './components/Indo';
import { Links } from './components/Links';
import { NavBar } from './components/NavBar';
import { Project } from './components/Project';
import { Skills } from './components/Skills';

function App() {
  return (
    <>
      <input type="checkbox" id="darkMode" />
      <div className="wrapper">
        <label for="darkMode" class="dark-mode-toggle">
          <i class="fa-solid fa-circle-half-stroke"></i>
        </label>
        <NavBar />
        <Hero />
        <Indo />
        <Skills />
        <Project />
        <About />
        <Contact />
        <Links />
        <Footer />
      </div>
    </>
  );
}

export default App;
