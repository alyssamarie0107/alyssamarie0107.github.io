import styles from './Home.module.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'; 
import WorldWebSVG from '../../assets/svg/worldWeb.svg';
import ContactBtns from '../../components/buttons/contact/contact-btns/ContactBtns';

// home section
const Home = () => {
    return (
        <section className={ styles.Home } id="home">
                <motion.div 
                    id={ styles.homeContainer }
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}>
                    <h1>I'm Alyssa Rodriguez.</h1>
                    <h2>Software Engineer <FontAwesomeIcon icon={ faLaptopCode } id={ styles.faLaptop }/></h2>
                    
                    <p>based in San Francisco, CA who is experienced in building frontend web applications that functions efficiently and provides exceptional digital experiences. I am passionate about all things technology and love tackling complex problems that make a positive impact on everyday lives.</p>

                    <ContactBtns/>
                </motion.div>
            
                <motion.img
                    id={ styles.worldWebSVG }
                    src={ WorldWebSVG }
                    alt="World Web SVG"
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }} 
                    transition={{ delay: 1 }}
                />
        </section>
    );
}
 
export default Home;