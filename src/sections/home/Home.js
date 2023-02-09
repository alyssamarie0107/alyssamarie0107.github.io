import styles from './Home.module.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'; 
import WorldWebSVG from '../../assets/svg/worldWeb.svg';
import ContactBtns from '../../components/buttons/contact/contact-btns/ContactBtns';

// home section
const Home = () => {
    return (
        <motion.section 
            className={ styles.Home } 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            id="home">
                <div id={ styles.homeContainer }>
                    <h1>I'm Alyssa Rodriguez.</h1>
                    <h2>Software Engineer <FontAwesomeIcon icon={ faLaptopCode } id={ styles.faLaptop }/></h2>
                    
                    <p>based in San Francisco, CA who is experienced in building frontend web applications that functions efficiently and provides exceptional digital experiences. I am passionate about all things technology and love tackling complex problems that make a positive impact on everyday lives.</p>

                    <ContactBtns/>
                </div>
                
                <img
                    id={ styles.worldWebSVG }
                    src={ WorldWebSVG }
                    alt="World Web SVG"
                />
        </motion.section>
    );
}
 
export default Home;