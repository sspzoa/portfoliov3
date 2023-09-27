'use client'

import {sendForm} from 'emailjs-com';
import React, {FormEvent} from 'react';
import styles from '@/styles/Home/Contact.module.css';

const Contect: React.FC = () => {
    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || !process.env.NEXT_PUBLIC_EMAILJS_USER_ID) {
            console.error("EmailJS environment variables are missing!");
            return;
        }

        sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            e.currentTarget,
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!')
            }, (error) => {
                console.log(error.text);
            });
        e.currentTarget.reset();
    }

    return (
        <div id="contact" className={styles.container}>
            <h1>Contact Me</h1>
            <div className={styles.box}>
                <form onSubmit={sendEmail}>
                    <div className={styles.row}>
                        <img className={styles.pic} src="/Contact/owl.png" alt="owl"/>
                        <div className={styles.inputBox}>
                            <div className={styles.column}>
                                <input type="text" name="from_name" placeholder="Name"/>
                                <input type="email" name="from_email" placeholder="Your Email"/>
                                <textarea name="message" placeholder="Message"/>
                                <button type="submit">Send</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contect;
