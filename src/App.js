import './App.css';
import { AboutUs } from './components/AboutUs';
import { Footer } from './components/Footer';
import { GetIn } from './components/GetIn';
import { Hero } from './components/Hero';
import { Indo } from './components/Indo';
import { Links } from './components/Links';
import { NavBar } from './components/NavBar';
import { Project } from './components/Project';
import { Skills } from './components/Skills';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <input type="checkbox" id="darkMode" />
      <div className="wrapper">
        <label for="darkMode" class="dark-mode-toggle">
          <i class="fa-solid fa-circle-half-stroke"></i>
        </label>
        <NavBar />
        <Routes>
          <Route path='/' element={ <Hero />} />
          <Route path='/' element={ <Indo />} />
          <Route path='/' element={ <Skills />} />
          <Route path='/' element={ <Project />} />
          <Route path='/' element={ <AboutUs />} />
          <Route path='/' element={ <GetIn />} />
          <Route path='/' element={ <Links />} />
        </Routes>
        
        {/* <Hero /> */}
        {/* <Indo />
        <Skills />
        <Project />
        <AboutUs />
        <GetIn />
        <Links /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
