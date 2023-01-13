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

    // video autoplays on mobile, however doesn't if it is on 'low power mode'
    // to detect if on low power mode, see if it has been suspended 
    // handles when video is suspended do to mobile device being on 'low power mode'
    const handleSuspend = (e) => {
        e.preventDefault();

        videoRef.current.play();
    }

    return (
        <div className={ styles.VideoWrapper }>
            <video muted playsInline autoPlay loop className={ styles.video } ref={videoRef} onSuspend = { handleSuspend }>
                <source src={ Video } type="video/mp4"/>
            </video>

            { props.children }
        </div>
    );
}

export default VideoWrapper;