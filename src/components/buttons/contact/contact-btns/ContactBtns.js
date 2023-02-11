import styles from './ContactBtns.module.css';
import { motion } from 'framer-motion';
import ContactBtn from '../contact-btn/ContactBtn';

// contact btns component
// displayed in home section and contact section
const ContactBtns = () => {
    return (
        <motion.div 
            className={ styles.ContactBtns }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}>
            <ContactBtn id={ styles.resumeBtn } href="https://drive.google.com/file/d/1HRKhO-QjodchyGQfNg9oGJTxj-duERC0/view?usp=share_link" target="_blank">Resume</ContactBtn>
                        
            <ContactBtn id={ styles.emailBtn } href="mailto:amrrodriguez@ucdavis.edu">Get in touch</ContactBtn>
        </motion.div>
    );
}
 
export default ContactBtns;