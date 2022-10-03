import { useRef, useEffect } from "react";

export default function AvatarDisplay ({avatar}) {
    const audioRef = useRef(null);
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.load(); 
        }
    }, [avatar]);

    return (
       <div>
        <img src={`avatars/${avatar}/${avatar}.png`} />
        <audio controls ref={audioRef}>
            <source src={`avatars/${avatar}/${avatar}.mp3`} type="audio/mpeg" />
        </audio>
       </div> 
    );
}