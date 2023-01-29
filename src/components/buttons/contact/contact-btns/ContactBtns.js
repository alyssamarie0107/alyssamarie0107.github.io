import styles from './ContactBtns.module.css';
import ContactBtn from '../contact-btn/ContactBtn';

const ContactBtns = () => {
    return (
        <div className={ styles.ContactBtns }>
            <ContactBtn id={ styles.resumeBtn } href="https://drive.google.com/file/d/1HRKhO-QjodchyGQfNg9oGJTxj-duERC0/view?usp=share_link" target="_blank">Resume</ContactBtn>
                        
            <ContactBtn id={ styles.emailBtn } href="mailto:amrrodriguez@ucdavis.edu">Get in touch</ContactBtn>
        </div>
    );
}
 
export default ContactBtns;