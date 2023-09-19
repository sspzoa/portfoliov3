import styles from '@/styles/Home/Skills.module.css'
import skillsData from '@/components/Home/Skills/skills.json';

export default function Skills() {
    return (
        <div id='skills' className={styles.container}>
            <h1>My Skills</h1>
            <div className={styles.box}>
                <div className={styles.skills}>
                    {skillsData.map((skill, index) => (
                        <div key={index} className={`${styles.skillItem} ${index === 2 ? styles.nomargin : ''}`}>
                            <a href={skill.url} target="_blank" rel="noopener noreferrer">
                                <img src={skill.imgSrc} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
