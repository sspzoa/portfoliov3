import styles from '@/styles/Home/Skills.module.css'

export default function Skills() {
    return (
        <div id='skills' className={styles.container}>
            <h1>My Skills</h1>
            <div className={styles.box}>
                <div className={styles.skills}>
                    <div className={styles.skillItem}>
                        <a href="https://docs.flutter.dev/" target="_blank" rel="noopener noreferrer"><img
                            src='/Skill/flutter.png'/></a>
                        <p>Flutter</p>
                    </div>
                    <div className={styles.skillItem}>
                        <a href="https://developer.android.com/jetpack/compose/documentation?hl=ko" target="_blank"
                           rel="noopener noreferrer"><img src='/Skill/jetpackcompose.png'/></a>
                        <p>Compose</p>
                    </div>
                    <div id={styles.nomargin} className={styles.skillItem}>
                        <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer"><img
                            src='/Skill/next.png'/></a>
                        <p>Next.js</p>
                    </div>
                    <div className={styles.skillItem}>
                        <a href="https://fastapi.tiangolo.com/" target="_blank" rel="noopener noreferrer"><img
                            src='/Skill/fastapi.png'/></a>
                        <p>FastAPI</p>
                    </div>
                    <div className={styles.skillItem}>
                        <a href="https://www.postgresql.org/docs/" target="_blank" rel="noopener noreferrer"><img
                            src='/Skill/postgressql.png'/></a>
                        <p>PostgresSQL</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
