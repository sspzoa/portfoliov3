'use client'

import {useState} from 'react'
import styles from '@/styles/Navbar.module.css'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const closeSidebar = () => {
        setIsOpen(false);
    }

    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <div className={styles.navbar__logo}>
                    <a href='/'>
                        <img className={styles.navbar__logo} src='/sspzoa.png' alt='sspzoa'/>
                        <h1>Portfolio</h1>
                    </a>
                </div>
                <div onClick={() => setIsOpen(!isOpen)} className={styles.menu}>
                    <div className={isOpen ? `${styles.bar} ${styles.bar1}` : styles.bar}></div>
                    <div className={isOpen ? `${styles.bar} ${styles.bar2}` : styles.bar}></div>
                    <div className={isOpen ? `${styles.bar} ${styles.bar3}` : styles.bar}></div>
                </div>
                <div className={isOpen ? `${styles.navbar__links} ${styles.open}` : styles.navbar__links}>
                    <ul>
                        <li><a onClick={closeSidebar} href='#about'>About</a></li>
                        <li><a onClick={closeSidebar} href='#skills'>Skills</a></li>
                        <li><a onClick={closeSidebar} href='#projects'>Projects</a></li>
                        <li><a onClick={closeSidebar} href='#contact'>Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
