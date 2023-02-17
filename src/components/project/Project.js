import styles from './Project.module.css';
import { motion } from 'framer-motion';

// animation variants
const projectVariants = {
    hidden: {
        x: -90,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 1,
            duration: 1.5
        }
    }
}

// project component
// includes img, title, description, tech stack, and visit btns
// used in projects section
const Project = (props) => {
    return (
        <motion.div 
            className={ styles.Project}
            variants={ projectVariants }
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}>
                <div className={ styles.projectImgContainer }>
                    <img 
                        className={ styles[props.imgStyling] }
                        src={ props.src } 
                        alt={ props.alt }
                    />
                </div>

                <div className={ styles.projectDescription }>
                    <h5>{ props.projectTitle }</h5>
                    <p>{ props.projectDescription }</p>
                    <ul className={ styles.techStack }>
                        { props.children }
                    </ul>

                    <div className={ styles.projectViewBtns }>
                        {props.projectViewBtns}
                    </div>
                </div>
        </motion.div>
    );
}
 
export default Project;