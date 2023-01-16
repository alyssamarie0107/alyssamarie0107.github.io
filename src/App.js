import './App.css';
import Home from './sections/home/Home';
import About from './sections/about/About';
import Skills from './sections/skills/Skills';
import Recommendation from './components/recommendation/Recommendation';
import Experience from './sections/experience/Experience';
import Projects from './sections/projects/Projects';
import Contact from './sections/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  return (
      <div className="App">
        <Home/>
        <About/>
        <Skills/>
        <Recommendation/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
  );
}

export default App;
