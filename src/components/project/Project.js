import styles from './Project.module.css';

// project component
// includes img, title, description, tech stack, and visit btns
// used in projects section
const Project = (props) => {
    return (
        <div className={ styles.Project}>
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
        </div>
    );
}
 
export default Project;