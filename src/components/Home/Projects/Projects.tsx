import Image from "next/image";

import styles from '@/styles/Home/Projects.module.css'
import projectData from '@/components/Home/Projects/projects.json';

export default function Projects() {
    return (
        <div id='projects' className={styles.container}>
            <h1>My Projects</h1>
            <div className={styles.projects}>
                {projectData.map((project, index) => (
                    <div key={index} className={styles.projects}>
                        <div className={styles.project}>
                            <a href={project.link} target="_blank" rel="noopener noreferrer"><img src={project.image} alt={project.title}/></a>
                            <div className={styles.textBox}>
                                <div className={styles.title}>
                                    <h1>{project.title}</h1>
                                    <p>{project.teamSize}</p>
                                </div>
                                <p>{project.description}</p>
                                <p>{project.period} | <a href={project.github} target="_blank" rel="noopener noreferrer" id={styles.link}>GitHub</a></p>
                                <div className={styles.tags}>
                                    {project.tag.split(', ').map((tag, tagIndex) => (
                                        <div key={tagIndex} className={styles.tag}>
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
