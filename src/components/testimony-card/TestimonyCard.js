import styles from './TestimonyCard.module.css';

const TestimonyCard = (props) => {
    return (
        <div className={ styles.TestimonyCard }>
            <div className={ styles.content}>
                <h5>"</h5>
                <p>
                    { props.testimony }
                </p>
            </div>
            <h5>{ props.by }</h5>
            <span>{ props.title }</span>
        </div>
    );
}
 
export default TestimonyCard;