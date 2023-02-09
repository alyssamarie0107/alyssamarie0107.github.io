import styles from './Skills.module.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools, faGears, faTerminal, faDatabase, faCloud } from '@fortawesome/free-solid-svg-icons';
import { faBootstrap, faCss3, faFigma, faGit, faGithub, faHtml5, faJs, faNodeJs, faPhp, faPython, faReact, faSketch, faSwift } from '@fortawesome/free-brands-svg-icons';
import Skill from '../../components/skill/Skill';
import Wires1SVG from '../../assets/svg/wires1.svg';
import Wires2SVG from '../../assets/svg/wires2.svg';

// skills section code
const Skills = () => {
    return (
        <motion.section
            className={ styles.Skills } 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            id="skills">

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
                            <h6>Frontend:</h6>
                            <div className= { styles.skills }>
                                <Skill icon= { faHtml5 } language="HTML5"/>
                                <Skill icon= { faCss3 } language="CSS3"/>
                                <Skill icon= { faJs } language="JavaScript"/>
                                <Skill icon= { faBootstrap } language="Bootstrap"/>
                                <Skill icon= { faReact } language="React.js"/>
                                <Skill icon= { faSwift } language="Swift"/>
                            </div>
                        </div>

                        <div id={ styles.backendSkills }>
                            <h6>Backend:</h6>
                            <div className={ styles.skills }>
                                <Skill icon= { faPython } language="Python"/>
                                <Skill icon= { faPhp } language="PHP" level="basic"/>
                                <Skill icon= { faNodeJs } language="Node.js"/>
                                <Skill icon= { faDatabase } language="SQL"/>
                                <Skill icon= { faCloud } language="RESTful API"/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* tools skills */}
                <div id={ styles.toolsContainer }>
                    <h5>Tools <FontAwesomeIcon icon={ faTools }/></h5>

                    <div className={ styles.skills }>
                        <Skill icon= { faGit } language="Git"/>
                        <Skill icon= { faGithub } language="Github"/>
                        <Skill icon= { faDatabase } language="Firebase"/>
                        <Skill icon= { faFigma } language="Figma"/>
                        <Skill icon= { faSketch } language="Sketch"/>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
 
export default Skills;