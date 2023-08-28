import styles from '@/styles/Home/About.module.css'

export default function About() {
    return (
        <div id='about' className={styles.container}>
            <h1>About Me</h1>
            <div className={styles.box}>
                <img src='/About/profile.jpeg'/>
                <div className={styles.textBox}>
                    <p>
                        안녕하세요!
                    </p>
                    <p>

                    </p>
                </div>
            </div>
            <div className={styles.boxes}>
                <div className={`${styles.box} ${styles.firstBox}`}>
                    <h1>Career</h1>
                    <p id={styles.stare}>Stare (23.04~)</p>
                    <p id={styles.stealth}>Stealth (23.03~)</p>
                    <p id={styles.kdmhs}>KDMHS (23.03~)</p>
                </div>
                <div className={`${styles.box} ${styles.secondBox}`}>
                    <h1>Contests</h1>
                    <p id={styles.stac}>STAC 2023 결선 (23.05~)</p>
                    <p id={styles.junctionasia}>Junction Asia 2023 본선 (23.08)</p>
                </div>
            </div>
        </div>
    )
}
