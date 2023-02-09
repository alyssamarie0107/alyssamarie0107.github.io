import styles from './ContactBtn.module.css';

// contact btn component 
// contact btn are resume and get in touch btn
const ContactBtn = (props) => {
    return (
        <a id={ props.id } className={ styles.ContactBtn } href={ props.href } target={ props.target }>{ props.children }</a>
    );
}
 
export default ContactBtn;