import styles from './VideoWrapper.module.css';

const VideoWrapper = (props) => {
    return (
        <div className={ styles.VideoWrapper }>
            <video playsInline autoPlay muted loop className={ styles.video }>
                <source src="/black.mp4" type="video/mp4"/>
            </video>

            { props.children }
        </div>
    );
}

export default VideoWrapper;