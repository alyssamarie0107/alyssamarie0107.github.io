import styles from './ContactBtns.module.css';
import { motion } from 'framer-motion';
import ContactBtn from '../contact-btn/ContactBtn';

// animation variants
// child of home motion section
const contactVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}

// contact btns component
// displayed in home section and contact section
const ContactBtns = () => {
    return (
        <motion.div 
            className={ styles.ContactBtns }
            variants={ contactVariants }>
            <ContactBtn id={ styles.resumeBtn } href="https://drive.google.com/file/d/1HRKhO-QjodchyGQfNg9oGJTxj-duERC0/view?usp=share_link" target="_blank">Resume</ContactBtn>
                        
            <ContactBtn id={ styles.emailBtn } href="mailto:amrrodriguez@ucdavis.edu">Get in touch</ContactBtn>
        </motion.div>
    );
}
 
export default ContactBtns;