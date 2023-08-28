import styles from '@/styles/Home/Skills.module.css'

export default function Skills() {
    return (
        <div id='skills' className={styles.container}>
            <h1>My Skills</h1>
            <div className={styles.box}>
                <div className={styles.skills}>
                    <div className={styles.skillItem}>
                        <img src='/Skill/flutter.png'/>
                        <p>Flutter</p>
                    </div>
                    <div className={styles.skillItem}>
                        <img src='/Skill/jetpackcompose.png'/>
                        <p>Jetpack Compose</p>
                    </div>
                    <div id={styles.nomargin} className={styles.skillItem}>
                        <img src='/Skill/next.png'/>
                        <p>Next.js</p>
                    </div>
                    <div id={styles.nomargin} className={styles.skillItem}>
                        <img src='/Skill/springboot.png'/>
                        <p>Spring Boot</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
