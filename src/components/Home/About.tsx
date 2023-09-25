import styles from '@/styles/Home/About.module.css'

export default function About() {
    return (
        <div id='about' className={styles.container}>
            <h1>About Me</h1>
            <div className={styles.box}>
                <img src='/About/profile.jpeg'/>
                <div className={styles.textBox}>
                    <p>
                        안녕하세요! 저는 현재 <span className={styles.kdmhs}>한국디지털미디어고등학교</span>에 재학 중이며 개발을 공부하고 있는 고등학생 개발자입니다.
                    </p>
                    <p>
                        이전에 <span className={styles.views}>Views</span> 방식의 안드로이드 앱 개발을 공부하였고, 현재는 <span
                        className={styles.jetpackcompose}>Jetpack Compose</span>를 이용한 안드로이드 앱 개발과 <span
                        className={styles.flutter}>크로스 플랫폼</span> 개발에 집중하고 있습니다.
                    </p>
                    <p>
                        또 저는 <span
                        className={styles.web3}>Web3와 블록체인</span>에 굉장한 흥미를 가지고 있습니다. 단순히 <span
                        className={styles.bitcoin}>가상화폐</span>의 개념을 넘어 이러한 기술의 발전이 각각의 측면에서 어떠한 파급 효과를 가져올지에 대해 큰
                        기대감을 가지고 있습니다.
                    </p>
                    <p>
                        기술의 <span
                        className={styles.manymany}>다양한 분야</span>에서 경험을 쌓으며, <span
                        className={styles.study}>끊임없이 발전하는 개발자</span>가 되기 위해 노력하고 있습니다!
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
