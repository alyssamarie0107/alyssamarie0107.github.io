import styles from './VideoWrapper.module.css';
import Video from '../../assets/video/black.mp4';
import { useRef, useEffect } from 'react';

const VideoWrapper = (props) => {
    const videoRef = useRef(null);

    // this fixed react ignoring muted attribute 
    // need it to be muted for autoPlay
    useEffect(() => {
        videoRef.current.defaultMuted = true;
    });

    return (
        <div className={ styles.VideoWrapper }>
            <video muted playsInline autoPlay loop className={ styles.video } ref={videoRef}>
                <source src={ Video } type="video/mp4"/>
            </video>

            { props.children }
        </div>
    );
}

export default VideoWrapper;