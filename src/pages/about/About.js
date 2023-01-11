import styles from './About.module.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'; 
import VideoWrapper from '../../components/video-wrapper/VideoWrapper';
import Nav from '../../components/navbar/Nav';
import Footer from '../../components/footer/Footer';
import ContactBtns from '../../components/buttons/contact/contact-btns/ContactBtns';

const About = () => {
    return (
        <motion.div
            className={ styles.About } 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0, transition: { duration: 0.3 } }}>
            <VideoWrapper>
                <Nav/>

                <div className={ styles.aboutContent }>
                    <div className = { styles.left }>
                        <div className={ styles.leftHeading }>
                            <p>Who am I?</p>
                            <h3>About Me <FontAwesomeIcon icon={ faAddressCard }/></h3>
                        </div>

                        <img
                            src="images/me.png"
                            alt="React Bootstrap logo"
                        />
                    </div>
                    <div className = { styles.right }>
                        <p>Hello! My name is Alyssa Rodriguez. I am a Software Engineer, based in San Francisco, CA who is specializing in frontend web development. I graduated from the University of California, Davis in June of 2021 with a Bachelor of Science degree in Computer Science. Currently, I have the priviledge of working at UCSF as their Frontend Web Developer Intern. I am also currently working as a Code Coach at theCoderSchool, where I teach kids between the ages of 6-18 how to code in Scratch, Python, or JavaScript.</p>

                        <p>I strive to write clean, scalable, and efficient code that outputs pixel perfect, interative, and responsive results to the web. I consider work as a developer an ongoing education, and I am continuously working to enhance my skillset and always looking for opportunities to work with those who are willing to share their knowledge as much as I want to learn. I am currently seeking an entry-level, full-time software engineering position at a company that is mission-driven, growing, and truly makes a positive impact or addresses an important problem, for I would be a valuable asset to any team.</p>

                        <ContactBtns/>
                    </div>
                </div>

                <Footer/>
            </VideoWrapper>
        </motion.div>
    );
}
 
export default About;