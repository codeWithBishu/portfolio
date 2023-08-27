import './App.css';
import About from './Component/About/About';
import Education from './Component/Education/Education';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar.js';
import Projects from './Component/Projects/Projects';
import Skill from './Component/Skill/Skill';




function App(){
  return (
   <>
   <Navbar/>
   <Home/>
   <About/>
   <Education/>
   <Skill/>
   <Projects/>
   <Footer/>
   </>
  );
}

export default App;
