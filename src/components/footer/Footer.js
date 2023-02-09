import styles from './Footer.module.css';

// helper function that gets the current year for the copyright in footer
const getCurrentYear = () => {
    const date = new Date();
    let current_year = date.getFullYear();
    return `©${ current_year } Alyssa Rodriguez`;
}

// footer component
const Footer = () => {
    return (
        <footer className={ styles.Footer }>
            <span>{ getCurrentYear() }</span>
        </footer>
    );
}
 
export default Footer;