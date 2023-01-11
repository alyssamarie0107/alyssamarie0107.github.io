import styles from './VisitBtn.module.css';

const VisitBtn = (props) => {
    return (
        <a target="_blank" rel="noreferrer" className={ styles.VisitBtn } href={ props.href }>{ props.children }</a>
    );
}
 
export default VisitBtn;