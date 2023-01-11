import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../../pages/home/Home';
import About from '../../pages/about/About';
import Skills from '../../pages/skills/Skills';
import Experience from '../../pages/experience/Experience';
import Projects from '../../pages/projects/Projects';
import Contact from '../../pages/contact/Contact';

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        // animate presence allows components to animate out when they're removed from the react tree
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
              {/* creating a Route for each page */}

              {/* home page */}
              <Route path="/" element={ <Home/> } />

              {/* about page */}
              <Route path="/about" element={ <About/> }/>

              {/* skills pages */}
              <Route path="/skills" element={ <Skills/> } />

              {/* experience */}
              <Route path="/experience" element={ <Experience/> } />

              {/* projects */}
              <Route path="/projects" element={ <Projects/> } />

              {/* contact page */}
              <Route path="/contact" element={ <Contact/> } />

            </Routes>
        </AnimatePresence>
    );
}
 
export default AnimatedRoutes;