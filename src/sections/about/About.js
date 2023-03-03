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
                            <p>Hello! My name is Alyssa Rodriguez. I am a Software Engineer, based in San Francisco, CA who is specializing in frontend web development. I graduated from the University of California, Davis in June of 2021 with a Bachelor of Science degree in Computer Science. Currently, I am working as a Code Coach at theCoderSchool, where I teach students between the ages of 6-18 how to code in Scratch, Python, or JavaScript. Recently, I have completed a year long internship with the University of California, San Francisco (UCSF) as their Front-End Web Developer Intern.</p>

                            <p>I consider work as a engineer an ongoing education and I am continuously working to enhance my skillset, whether that is watching tutorials on YouTube, taking courses on Udemy or LinkedIn Learning, and/or building projects with the latest technology. Though I am focusing on frontend, I am learning more backend technologies, such as PHP, so that I can be considered full stack. I am passionate about writing clean, scalable, and efficient code that outputs pixel perfect, interative, and responsive results to the web. Currently, I am actively seeking software engineering opportunities.</p>
                        </div>
                </motion.div>
        </section>
    );
}
 
export default About;