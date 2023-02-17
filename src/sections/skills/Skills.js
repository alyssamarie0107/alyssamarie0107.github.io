import styles from './Skills.module.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools, faGears, faTerminal, faDatabase, faCloud } from '@fortawesome/free-solid-svg-icons';
import { faBootstrap, faCss3, faFigma, faGit, faGithub, faHtml5, faJs, faNodeJs, faPhp, faPython, faReact, faSketch, faSwift } from '@fortawesome/free-brands-svg-icons';
import Skill from '../../components/skill/Skill';
import Wires1SVG from '../../assets/svg/wires1.svg';
import Wires2SVG from '../../assets/svg/wires2.svg';

// animation variants
const skillsVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: { duration: 1 }
    }
}

// skills section
const Skills = () => {
    return (
        <motion.section
            className={ styles.Skills }
            id="skills"
            variants={ skillsVariants }
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.9 }}>

            <img
                id={ styles.wires1SVG }
                src={ Wires1SVG }
                alt="Wires1 SVG"
            />

            <img
                id={ styles.wires2SVG }
                src={ Wires2SVG }
                alt="Wires2 SVG"
            />

            <div id={ styles.skillsHeading }>
                <p>What can I do?</p>
                <h3>Skills <FontAwesomeIcon icon={ faTerminal } id={ styles.faTerminal }/></h3>
            </div>

            <div id={ styles.skillsContainer }>
                {/* development skills */}
                <div id={ styles.developmentContainer }>
                    <h5>Development <FontAwesomeIcon icon={ faGears }/></h5>

                    <div id={ styles.developmentSkills }>
                        <div id={ styles.frontendSkills }>
                            <h6>Frontend</h6>
                            <div className= { styles.skills }>
                                <Skill icon= { faHtml5 } skillName="HTML5"/>
                                <Skill icon= { faCss3 } skillName="CSS3"/>
                                <Skill icon= { faJs } skillName="JavaScript"/>
                                <Skill icon= { faBootstrap } skillName="Bootstrap"/>
                                <Skill icon= { faReact } skillName="React.js"/>
                                <Skill icon= { faSwift } skillName="Swift"/>
                            </div>
                        </div>

                        <div id={ styles.backendSkills }>
                            <h6>Backend</h6>
                            <div className={ styles.skills }>
                                <Skill icon= { faPython } skillName="Python"/>
                                <Skill icon= { faPhp } skillName="PHP" level="basic"/>
                                <Skill icon= { faNodeJs } skillName="Node.js"/>
                                <Skill icon= { faDatabase } skillName="SQL"/>
                                <Skill icon= { faCloud } skillName="RESTful API"/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* tools skills */}
                <div id={ styles.toolsContainer }>
                    <h5>Tools <FontAwesomeIcon icon={ faTools }/></h5>

                    <div className={ styles.skills }>
                        <Skill icon= { faGit } skillName="Git"/>
                        <Skill icon= { faGithub } skillName="Github"/>
                        <Skill icon= { faDatabase } skillName="Firebase"/>
                        <Skill icon= { faFigma } skillName="Figma"/>
                        <Skill icon= { faSketch } skillName="Sketch"/>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
 
export default Skills;