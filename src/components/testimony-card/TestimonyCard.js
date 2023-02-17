import styles from './TestimonyCard.module.css';
import { motion } from 'framer-motion';

// animation variants
const testimonyCardVariants = {
    hover: {
        scale: 1.1
    }
}

const TestimonyCard = (props) => {
    return (
        <motion.div className={ styles.TestimonyCard }>
            <motion.div 
                className={ styles.content}
                variants={ testimonyCardVariants }
                whileHover="hover">
                    <h5>"</h5>
                    <p>
                        { props.testimony }
                    </p>
            </motion.div>
            <h5>{ props.by }</h5>
            <span>{ props.title }</span>
        </motion.div>
    );
}
 
export default TestimonyCard;