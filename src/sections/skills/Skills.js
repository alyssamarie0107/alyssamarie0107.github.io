import styles from './Skills.module.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools, faGears, faTerminal, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faBootstrap, faCss3, faFigma, faGit, faGithub, faHtml5, faJs, faNodeJs, faPhp, faPython, faReact, faSketch, faSwift } from '@fortawesome/free-brands-svg-icons';
import Skill from '../../components/skill/Skill';

const Skills = () => {
    return (
        <motion.section
            className={ styles.Skills } 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            id="skills">

            <div className={ styles.skillsHeading }>
                <p>What can I do?</p>
                <h3>Skills <FontAwesomeIcon icon={ faTerminal }/></h3>
            </div>

            <div className={ styles.skillsContent }>
                <div className={ styles.skillsContainer }>
                    {/* development skills */}
                    <div className={ styles.developmentSkills }>
                        <h5>Development <FontAwesomeIcon icon={ faGears }/></h5>

                        <div className={ styles.skills }>
                            <Skill icon= { faHtml5 } language="HTML" level="proficient"/>
                            <Skill icon= { faCss3 } language="CSS" level="proficient"/>
                            <Skill icon= { faJs } language="JavaScript" level="proficient"/>
                            <Skill icon= { faBootstrap } language="Bootstrap" level="proficient"/>
                            <Skill icon= { faReact } language="React.js" level="basic"/>
                            <Skill icon= { faPython } language="Python" level="proficient"/>
                            <Skill icon= { faPhp } language="PHP" level="basic"/>
                            <Skill icon= { faNodeJs } language="Node.js" level="basic"/>
                            <Skill icon= { faSwift } language="Swift" level="basic"/>
                        </div>
                    </div>

                    <div className={ styles.toolsSkills }>
                        {/* tools skills */}
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
            </div>
        </motion.section>
    );
}
 
export default Skills;