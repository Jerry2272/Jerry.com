// import logo from './logo.svg';
import { BrowserRouter} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {FaMoon, FaSun} from 'react-icons/fa';
import { createContext, useState } from 'react';
import ReactSwitc from 'react-switch'
import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/AboutMe';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Porfolio from './components/Portfolio/Porfolio';
// import Navbar from './components/Navbar';

function App() {
  const ContextApi = createContext(null);
const [theme, setTheme] = useState('dark');
const modeToggle = () =>{
  setTheme((darkMode) => (darkMode === 'light' ? 'dark' : 'light'))
}

  return (
    <BrowserRouter>
    <div className="App" id={theme}>
      <header className="App-header"> 
      <ContextApi.Provider value={{theme, modeToggle}}>
        <h2>Jerry</h2>
      <ReactSwitc 
      onChange={modeToggle}
      checked={theme === 'dark'}
      checkedIcon={<FaMoon color="#fff" className="state" />}
      uncheckedIcon={<FaSun color="#fff" className="state" />}
      className='switch'
       />
      {
        theme
      }
        </ContextApi.Provider>
      </header>
      <ContextApi.Provider value={{theme}}>
   <Navbar />
   <Hero />
   <AboutMe />
   <Services />
   <Skills />
   <Porfolio />
   <Contact />
   <Footer/>
   </ContextApi.Provider>
    </div>
   </ BrowserRouter>
  )
}

export default App;
