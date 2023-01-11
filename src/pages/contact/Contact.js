import styles from './Contact.module.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons'; 
import Footer from '../../components/footer/Footer';
import Nav from '../../components/navbar/Nav';
import VideoWrapper from '../../components/video-wrapper/VideoWrapper';
import ContactBtn from '../../components/buttons/contact/contact-btn/ContactBtn';

const Contact = () => {
    return (
        <motion.div
            className={ styles.Contact } 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0, transition: { duration: 0.3 } }}>
            <VideoWrapper>
                <Nav/>

                <div className={ styles.contactContent }>
                    <div className={ styles.contactHeading }>
                        <p>What's Next?</p>
                        <h3>Get in Touch <FontAwesomeIcon icon={ faMessage }/></h3>
                    </div>

                    <p>I am always looking for opportunities to expand upon my skills and currently seeking entry-level full-time software engineering opportunities. My inbox is always open and I'd love to hear from you if you are looking to network or are interested in having me on your team.</p>

                    <ContactBtn id="getInTouchBtn" href="mailto:amrrodriguez@ucdavis.edu">Get in touch</ContactBtn>
                </div>

                <Footer/>
            </VideoWrapper>
        </motion.div>
    );
}
 
export default Contact;