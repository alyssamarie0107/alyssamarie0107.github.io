import styles from './About.module.css';
import Me from '../../assets/images/me.png';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'; 
import ContactBtns from '../../components/buttons/contact/contact-btns/ContactBtns';

const About = () => {
    return (
        <motion.section
            className={ styles.About } 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            id="about">

            <div className={ styles.aboutHeading }>
                <p>Who am I?</p>
                <h3>About Me <FontAwesomeIcon icon={ faAddressCard }/></h3>
            </div>

            <div className={ styles.aboutContent }>
                <div className = { styles.left }>
                    <p>Hello! My name is Alyssa Rodriguez. I am a Software Engineer, based in San Francisco, CA who is specializing in frontend web development. I graduated from the University of California, Davis in June of 2021 with a Bachelor of Science degree in Computer Science. Currently, I am working as a Code Coach at theCoderSchool, where I teach kids between the ages of 6-18 how to code in Scratch, Python, or JavaScript. Recently, I have completed a year long internship with UCSF as their Front-End Web Developer Intern.</p>

                    <p>I strive to write clean, scalable, and efficient code that outputs pixel perfect, interative, and responsive results to the web. I consider work as a developer an ongoing education, and I am continuously working to enhance my skillset and always looking for opportunities to work with those who are willing to share their knowledge as much as I want to learn. I am currently seeking an entry-level, full-time software engineering position at a company that is mission-driven, growing, and truly makes a positive impact or addresses an important problem, for I would be a valuable asset to any team.</p>

                    <div className={ styles.contactBtnsContainer }>
                        <ContactBtns/>
                    </div>
                </div>

                <div className = { styles.right }>
                    <img
                        src={ Me }
                        alt="React Bootstrap logo"
                    />
                </div>
            </div>
        </motion.section>
    );
}
 
export default About;