import styles from './Home.module.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faLaptopCode } from '@fortawesome/free-solid-svg-icons'; 
import ContactBtns from '../../components/buttons/contact/contact-btns/ContactBtns';
import VideoWrapper from '../../components/video-wrapper/VideoWrapper';

const Home = () => {
    return (
        <motion.section 
            className={ styles.Home } 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            id="home">
            
            <VideoWrapper>
                {/* this will be positioned on top of video background */}
                <div className = { styles.homeContent }>
                    <div id={ styles.greetingContainer }>
                        <p id={ styles.greeting }>
                            Hello, World.
                        </p>
                        <FontAwesomeIcon icon={ faGlobe } bounce/>
                    </div>

                    <h1>I'm Alyssa Rodriguez.</h1>
                    <h2>
                        Software Engineer <span className={ styles.laptopIcon }><FontAwesomeIcon icon={ faLaptopCode }/></span>
                    </h2>
                    
                    <p>based in San Francisco, CA who is experienced in building frontend web applications that functions efficiently and provides exceptional digital experiences. I am passionate about all things technology and love tackling complex problems that make a positive impact on everyday lives.</p>

                    <ContactBtns/>
                </div>
            </VideoWrapper>
        </motion.section>
    );
}
 
export default Home;