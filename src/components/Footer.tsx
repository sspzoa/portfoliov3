import styles from '@/styles/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.icons}>
                <a href="https://github.com/sspzoa" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className={styles.icon} />
                </a>
                <a href="https://www.instagram.com/_s._.pyo/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
                </a>
            </div>
            <h1>&copy; 2023 Seungpyo Suh. All rights reserved.</h1>
        </div>
    )
}
