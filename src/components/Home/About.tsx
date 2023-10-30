import styles from '@/styles/Home/About.module.css'

export default function About() {
    return (
        <div id='about' className={styles.container}>
            <h1>About Me</h1>
            <div className={styles.box}>
                <img src='/About/profile.jpeg' alt="profileImage"/>
                <div className={styles.careerBox}>
                    <p id={styles.dimipay}>DIMIPAY (23.10~)</p>
                    <div className={styles.career}>
                        <p>배우ㄱing</p>
                    </div>
                    <p id={styles.kdmhs}>KDMHS (23.03~)</p>
                    <div className={styles.career}>
                        <p>제5회 한국코드페어 해커톤 대상 (SNNECT) (희망사항)</p>
                        <p>Junction Asia 2023 본선 진출 (TasteByYou)</p>
                        <p>STA+C 2023 개발팀 결선 진출 (Glud)</p>
                        <p>STARE 메인 프로젝트 프론트엔드 리딩</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
