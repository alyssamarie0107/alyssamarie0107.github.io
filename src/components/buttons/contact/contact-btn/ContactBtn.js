import styles from './ContactBtn.module.css';

const ContactBtn = (props) => {
    return (
        <a id={ props.id } className={ styles.ContactBtn } href={ props.href } target={ props.target }>{ props.children }</a>
    );
}
 
export default ContactBtn;