import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import GlassmorphismGenerator from './components/services/GlassmorphismGenerator';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';


function App() {
  return (
    <>
    <Navbar/>
    <Profile/>
    <About/>
    <Skills/>
    <Projects/>
    {/* <GlassmorphismGenerator/> */}
    <Footer/>
    </>
  );
}

export default App;
