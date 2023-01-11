import styles from './Footer.module.css';
import SocialBtns from '../buttons/social/SocialBtns';

// helper function that gets the current year for the copyright in footer
const getCurrentYear = () => {
    const date = new Date();
    let current_year = date.getFullYear();
    return `©${ current_year } Designed & Built by Alyssa Rodriguez.`;
}

const Footer = () => {
    return (
        <footer className={ styles.Footer }>
            <SocialBtns/>
            
            <span>{ getCurrentYear() }</span>
        </footer>
    );
}
 
export default Footer;