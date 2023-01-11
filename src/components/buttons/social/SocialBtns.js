import styles from './SocialBtns.module.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'; 

const SocialBtn = (props) => {
    return (
        <motion.a 
            target="_blank" 
            rel="noopener noreferrer" 
            href={ props.href }
            whileHover={{ y: -2 }}>
            { props.children }
        </motion.a>
    );
}

const SocialBtns = () => {
    return (
        <div className={ styles.SocialBtns }>
            <SocialBtn href="https://www.linkedin.com/in/alyssamarie0107/">
                <FontAwesomeIcon className={ styles.SocialBtn } icon={ faLinkedin } size="2x"/>
            </SocialBtn>

            <SocialBtn href="https://github.com/alyssamarie0107">
                <FontAwesomeIcon className={ styles.SocialBtn } icon={ faGithub } size="2x"/>
            </SocialBtn>
            
            <SocialBtn href="https://www.instagram.com/lyss.codes/">
                <FontAwesomeIcon className={ styles.SocialBtn } icon={ faInstagram } size="2x"/>
            </SocialBtn>
        </div>
    );
}
 
export default SocialBtns;