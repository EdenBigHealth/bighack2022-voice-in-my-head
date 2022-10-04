import styles from "./styles.module.css";

export default function ChosenAvatar({avatar}) {
    return (
        <div className={styles.container}>
            <img src={`avatars/${avatar}/${avatar}.png`}/>
            <p className={styles.text}>You have chosen <strong style={{textDecoration: "underline"}}>{avatar}</strong> to be your instructor.</p>
        </div>
    );
}