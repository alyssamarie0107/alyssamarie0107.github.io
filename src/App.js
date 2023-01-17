import './App.css';
import MyNav from './components/navbar/Nav';
import Home from './sections/home/Home';
import About from './sections/about/About';
import Skills from './sections/skills/Skills';
import Testimonial from './components/testimonial/Testimonial';
import Experience from './sections/experience/Experience';
import Projects from './sections/projects/Projects';
import Contact from './sections/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  return (
      <div className="App">
        <MyNav/>
        <Home/>
        <About/>
        <Skills/>
        <Testimonial/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
  );
}

export default App;
