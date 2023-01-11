import styles from './ProjectCard.module.css';

const ProjectCard = (props) => {
    return (
        <div className={ styles.ProjectCard }>
            <h6>{ props.title }</h6>
            { props.children }
        </div>
    );
}
 
export default ProjectCard;