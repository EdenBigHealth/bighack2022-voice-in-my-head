import { useRef, useEffect, useState } from "react";
import styles from "./styles.module.css";


export default function AvatarDisplay (props) {
    const avatarNames = ['damian', 'jordan', 'wade', 'zoey', 'ben', 'terra', 'roxy', 'vanessa'];
    const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

    const audioRefs = useRef([]);

    const onPlay = (e) => {
        setCurrentlyPlaying(e.target.id);
    };

    const onPause = (e) => {
        setCurrentlyPlaying(null)
    }

    useEffect(() => {
        audioRefs.current.forEach(ref => {
            if (ref.id !== currentlyPlaying) {
                ref.pause();
            }
        })
    }, [currentlyPlaying])

    useEffect(() => { 
        audioRefs.current.map(ref => {
            ref.addEventListener('play', onPlay);
            ref.addEventListener('pause', onPause);
        });

        return () => {
            audioRefs.current.map(ref => {
                ref.removeEventListener('play', onPlay);
            });
        }
    }, []);

    return (
        <div className={styles.container}>
            {avatarNames.map((avatar, idx) => {
                return (
                    <div 
                        key={idx} 
                        className={styles.avatarProfile}
                        onClick={() => { props.setChosenAvatar(avatar)}}
                        >
                        <div className={currentlyPlaying === avatar ? styles.avatarImgBorder : ""}>
                            <img className={styles.avatarImg} src={`avatars/${avatar}/${avatar}.png`} />
                        </div>
                        <p className={styles.avatarName}>{avatar}</p>
                        <audio ref={el => audioRefs.current[idx] = el} className={styles.avatarAudio} id={avatar} controls>
                            <source  src={`avatars/${avatar}/${avatar}.mp3`} type="audio/mpeg" />
                        </audio>
                    </div>
                )
            })}
        </div> 
    );
}