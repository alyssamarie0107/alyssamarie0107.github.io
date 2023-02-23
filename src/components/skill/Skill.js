import styles from './Skill.module.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// animation variants
const skillsChildVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}

// skill component
// includes font awesome icon and skill name 
const Skill = (props) => {
    return (
        <motion.div 
            className={ styles.Skill }
            variants={ skillsChildVariants }>
                <div className={ styles.skillContainer }>
                    <div>
                            <FontAwesomeIcon icon={ props.icon } size="2x" className="fa-fw"/>
                    </div>
                    <span>{ props.skillName }</span>
                </div>
        </motion.div>
    );
}
 
export default Skill;