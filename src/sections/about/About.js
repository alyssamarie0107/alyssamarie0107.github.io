import styles from './About.module.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFemale } from '@fortawesome/free-solid-svg-icons'; 
import Sparks1SVG from '../../assets/svg/sparks1.svg';
import Sparks2SVG from '../../assets/svg/sparks2.svg';

// animation variants
const aboutContainerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: { delay: 1.3, duration: 1 }
    }
}

const imgVariants = {
    hidden: {
        scale: 0
    },
    visible: {
        scale: 1,
        transition: { duration: 1.5 }
    }
}

// about section
const About = () => {
    return (
        <section
            className={ styles.About }
            id="about">
                <motion.img
                    id={ styles.sparks1SVG }
                    src={ Sparks1SVG }
                    alt="Sparks1 SVG"
                    variants={ imgVariants }
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                />

                <motion.img
                    id={ styles.sparks2SVG }
                    src={ Sparks2SVG }
                    alt="Sparks2 SVG"
                    variants={ imgVariants }
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true  }}
                />

                <motion.div 
                    id={ styles.aboutHeading }
                    variants={ aboutContainerVariants }
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}>
                        <p>Who am I?</p>
                        <h3>About Me <FontAwesomeIcon icon={ faFemale } id={styles.faFemale } /></h3>
                </motion.div>

                <motion.div 
                    id={ styles.aboutContainer }
                    variants={ aboutContainerVariants }
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}>
                        <div id = { styles.about }>
                            <p>Hello! My name is Alyssa Rodriguez. I am a Software Developer based in San Francisco, CA. I graduated from the University of California, Davis in 2021 with a Bachelor of Science degree in Computer Science. Currently, I am a full time Jr. Software Developer at USI Insurance Services, where I have the opportunity to build Robotic Process Automation (RPA) solutions. In addition, I am a part time Software Engineer at Options MD, where I build out frontend components and features for their core platform and services.</p>

                            <p>My work philosophy is rooted in the belief that software engineering is an ongoing education, and I constantly endeavor to enhance my skills. I am a proactive learner who stays up-to-date with the latest industry developments and techniques by watching video tutorials, taking online courses, and engaging in personal projects using the latest technologies.</p>
                        </div>
                </motion.div>
        </section>
    );
}
 
export default About;