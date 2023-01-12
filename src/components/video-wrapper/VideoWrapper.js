import styles from './VideoWrapper.module.css';
import Video from '../../assets/video/black.mp4';

const VideoWrapper = (props) => {
    return (
        <div className={ styles.VideoWrapper }>
            <video playsInline autoPlay muted loop className={ styles.video }>
                <source src={ Video } type="video/mp4"/>
            </video>

            { props.children }
        </div>
    );
}

export default VideoWrapper;