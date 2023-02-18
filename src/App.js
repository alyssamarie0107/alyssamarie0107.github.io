import './App.css';
import './variables.css';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import GridLoader from "react-spinners/GridLoader";
import RingLoader from "react-spinners/RingLoader";
import MyNav from './components/navbar/Nav';
import Home from './sections/home/Home';
import About from './sections/about/About';
import Skills from './sections/skills/Skills';
import Testimony from './sections/testimony/Testimony';
import Experience from './sections/experience/Experience';
import Projects from './sections/projects/Projects';
import Contact from './sections/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  const [loading, setLoading] = useState(false);

  // going to server as lifecycle method
  // passing in a '[]' meaning function will run one time when the page is rendered
  // when the page is rendered, set loading to true 
  useEffect(() => {
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, [])

  return (
      <div className="App">
        {/* display loader if loading is true, else display app */}
        {
          loading ? (
            <RingLoader
            color={"#698082"}
            loading={loading}
            size={130}
            aria-label="Loading Spinner"
            data-testid="loader"
            />
          ) : (
            // inserted a motion here, for the Navbar to animate 
            // ? unsure if framer motion can be used with bootstrap components 
            // tried motion.custom(), but still wasn't working so this will do for now
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
              <MyNav/>
              <Home/>
              <About/>
              <Skills/>
              <Experience/>
              <Testimony/>
              <Projects/>
              <Contact/>
              <Footer/>
            </motion.div>
          )
        }

      </div>
  );
}

export default App;
