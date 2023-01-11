import styles from './Skill.module.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Skill = (props) => {
    return (
        <div className={ styles.Skill }>
            <div className={ styles.skillContainer }>
                <motion.div whileHover={{ scale: 1.1 }}><FontAwesomeIcon icon={ props.icon } size="2x" className="fa-fw"/></motion.div>
                <span>{ props.language }</span>
                <span className={ styles.level }>{ props.level }</span>
            </div>
        </div>
    );
}
 
export default Skill;