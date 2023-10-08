import styles from '@/styles/Home/Intro.module.css'

export default function Intro() {
    return (
        <div className={styles.container}>
            <div className={styles.laptop}>
                <div className={styles.stickers}>
                    <a href="https://www.dimigo.hs.kr/" target="_blank" rel="noopener noreferrer"><img id={styles.kdmhs}
                                                                                                                src='/Intro/kdmhs.jpg'
                                                                                                                alt="KDMHS"/></a>
                    <a href="https://www.instagram.com/stealth_dimigo/" target="_blank" rel="noopener noreferrer"><img id={styles.stealth}
                                                                                                                       src='/Intro/stealth.svg'
                                                                                                                       alt="Stealth"/></a>
                    <a href="https://github.com/Stare-in-dimigo" target="_blank" rel="noopener noreferrer"><img id={styles.stare}
                                                                                                                src='/Intro/stare.svg'
                                                                                                                alt="STARE"/></a>
                    {/*<a href="https://github.com/dimipay" target="_blank" rel="noopener noreferrer"><img id={styles.dimipay}*/}
                    {/*                                                                                            src='/Intro/dimipay.png'*/}
                    {/*                                                                                            alt="Dimipay"/></a>*/}
                </div>
                <a href="https://github.com/sspzoa" target="_blank" rel="noopener noreferrer"><img id={styles.logo}
                                                                                                   src='/Intro/sspzoalogo.png'
                                                                                                   alt="Logo"/></a>
            </div>
        </div>
    )
}
