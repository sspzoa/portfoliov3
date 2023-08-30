import styles from '@/styles/Home/About.module.css'

export default function About() {
    return (
        <div id='about' className={styles.container}>
            <h1>About Me</h1>
            <div className={styles.box}>
                <img src='/About/profile.jpeg'/>
                <div className={styles.textBox}>
                    <p>
                        안녕하세요! 현재 한국디지털미디어고등학교에 재학중이며 앱개발 위주로 공부하고 있는 서승표입니다.
                    </p>
                    <p>
                        이전에 <span className={styles.java}>Java</span>와 <span className={styles.kotlin}>Kotlin</span>을
                        사용한 안드로이드 앱 개발을 공부하였고, 현재는 <span className={styles.flutter}>Flutter</span>를 이용한 크로스 플랫폼 개발을 하고있습니다.
                    </p>
                    <p>
                        웹프론트는 <span className={styles.nextjs}>Next.js</span>, 백엔드는 <span className={styles.springboot}>Spring Boot</span>를
                        공부했습니다.
                    </p>
                    <p>
                        기술의 다양한 분야에서 경험을 쌓으며, 끊임없이 발전하는 개발자가 되기 위해 노력하고있습니다!
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
                    <p id={styles.codefairhackathon}>제5회 한국코드페어 해커톤 본선 (23.06~)</p>
                    <p id={styles.stac}>STAC 2023 결선 (23.05~)</p>
                    <p id={styles.junctionasia}>Junction Asia 2023 본선 (23.08)</p>
                </div>
            </div>
        </div>
    )
}
