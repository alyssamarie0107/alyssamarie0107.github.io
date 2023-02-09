import styles from './ViewBtn.module.css';

// view btn component 
// displayed in projects section for each project
// can visit website or code of project
const ViewBtn = (props) => {
    return (
        <a target="_blank" rel="noreferrer" className={ styles.ViewBtn } href={ props.href }>{ props.children }</a>
    );
}
 
export default ViewBtn;