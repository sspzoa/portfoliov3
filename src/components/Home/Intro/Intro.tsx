import styles from '@/styles/Home/Intro.module.css';
import linksData from './intro.json';

export default function Intro() {
    return (
        <div className={styles.container}>
            <div className={styles.laptop}>
                {linksData.map((section) => (
                    <div key={section.id} className={styles[section.id]}>
                        {section.links.map((link) => (
                            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                                <img id={styles[link.styleId]} src={link.imgSrc} alt={link.alt}/>
                            </a>
                        ))}
                    </div>
                ))}
                <div className={styles.signature}>
                    <h1>My laptop is my life.
                    </h1>
                </div>
            </div>
        </div>
    );
}
