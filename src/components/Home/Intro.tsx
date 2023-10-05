import styles from '@/styles/Home/Intro.module.css'

export default function Intro() {
    return (
        <div className={styles.container}>
            <a href="https://github.com/sspzoa" target="_blank" rel="noopener noreferrer"><img id={styles.logo}
                                                                                               src='/Intro/sspzoa.png'
                                                                                               alt="Logo"/></a>
            <a href="https://www.instagram.com/stealth_dimigo/" target="_blank" rel="noopener noreferrer"><img id={styles.stealth}
                                                                                                        src='/Intro/stealth.svg'
                                                                                                        alt="Stealth"/></a>
            <a href="https://github.com/Stare-in-dimigo" target="_blank" rel="noopener noreferrer"><img id={styles.stare}
                                                                                               src='/Intro/stare.svg'
                                                                                               alt="STARE"/></a>
        </div>
    )
}
