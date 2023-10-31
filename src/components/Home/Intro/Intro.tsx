'use client'

import styles from '@/styles/Home/Intro.module.css';

export default function Intro() {

    return (
        <div className={styles.container}>
            <div className={styles.introContainer}>
                <div className={styles.logo}>
                    <h1>
                        Hello,<br/>I&apos;m Seungpyo Suh
                    </h1>
                    <p>I&apos;m a software engineer,<br />proficient in using Android,<br />learning to make cross-platform apps.</p>
                </div>
                <img className={styles.logoimage} src='/Intro/sspzoalogo.png'/>
                <a href="#about" className={styles.scroll}><img src="/Intro/arrow.svg"/></a>
            </div>
        </div>
    );
}
