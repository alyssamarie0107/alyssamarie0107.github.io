import styles from './Skill.module.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// skill component
// includes font awesome icon and skill name 
const Skill = (props) => {
    return (
        <div className={ styles.Skill }>
            <div className={ styles.skillContainer }>
                <motion.div whileHover={{ scale: 1.1 }}><FontAwesomeIcon icon={ props.icon } size="2x" className="fa-fw"/></motion.div>
                <span>{ props.skillName }</span>
            </div>
        </div>
    );
}
 
export default Skill;