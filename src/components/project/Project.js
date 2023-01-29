import styles from './Project.module.css';

const Project = (props) => {
    return (
        <div className={ styles.Project}>
            <div className={ styles.projectImgContainer }>
                <img 
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