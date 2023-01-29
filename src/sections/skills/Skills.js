import styles from './Skills.module.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools, faGears, faTerminal, faDatabase, faCloud } from '@fortawesome/free-solid-svg-icons';
import { faBootstrap, faCss3, faFigma, faGit, faGithub, faHtml5, faJs, faNodeJs, faPhp, faPython, faReact, faSketch, faSwift } from '@fortawesome/free-brands-svg-icons';
import Skill from '../../components/skill/Skill';

// skills section code
const Skills = () => {
    return (
        <motion.section
            className={ styles.Skills } 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            id="skills">

            <div id={ styles.skillsHeading }>
                <p>What can I do?</p>
                <h3>Skills <FontAwesomeIcon icon={ faTerminal }/></h3>
            </div>

            <div id={ styles.skillsContainer }>
                {/* development skills */}
                <div id={ styles.developmentContainer }>
                    <h5>Development <FontAwesomeIcon icon={ faGears }/></h5>

                    <div id={ styles.developmentSkills }>
                        <div id={ styles.frontendSkills }>
                            <h6>Frontend:</h6>
                            <div className= { styles.skills }>
                                <Skill icon= { faHtml5 } language="HTML5" level="proficient"/>
                                <Skill icon= { faCss3 } language="CSS3" level="proficient"/>
                                <Skill icon= { faJs } language="JavaScript" level="proficient"/>
                                <Skill icon= { faBootstrap } language="Bootstrap" level="proficient"/>
                                <Skill icon= { faReact } language="React.js" level="basic"/>
                                <Skill icon= { faSwift } language="Swift" level="basic"/>
                            </div>
                        </div>

                        <div id={ styles.backendSkills }>
                            <h6>Backend:</h6>
                            <div className={ styles.skills }>
                                <Skill icon= { faPython } language="Python" level="proficient"/>
                                <Skill icon= { faPhp } language="PHP" level="basic"/>
                                <Skill icon= { faNodeJs } language="Node.js" level="basic"/>
                                <Skill icon= { faDatabase } language="SQL" level="basic"/>
                                <Skill icon= { faCloud } language="RESTful API" level="basic"/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* tools skills */}
                <div id={ styles.toolsContainer }>
                    <h5>Tools <FontAwesomeIcon icon={ faTools }/></h5>

                    <div className={ styles.skills }>
                        <Skill icon= { faGit } language="Git" level="proficient"/>
                        <Skill icon= { faGithub } language="Github" level="proficient"/>
                        <Skill icon= { faDatabase } language="Firebase" level="proficient"/>
                        <Skill icon= { faFigma } language="Figma" level="basic"/>
                        <Skill icon= { faSketch } language="Sketch" level="basic"/>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
 
export default Skills;