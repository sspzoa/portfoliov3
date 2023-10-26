'use client'

import { useState, useEffect } from 'react';
import styles from '@/styles/Home/Intro.module.css';

export default function Intro() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.time}>{currentTime.toLocaleTimeString('en-US', { hour12: false })}</h1>
            <p className={styles.explain}>GMT +9</p>
        </div>
    );
}
