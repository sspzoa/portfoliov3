import styles from '@/styles/Home/Projects.module.css'
import projectData from '@/components/Home/Projects/projects.json';

export default function Projects() {
    return (
        <div id='projects' className={styles.container}>
            <h1>My Projects</h1>
            {projectData.map((project, index) => (
                <div key={index} className={styles.box}>
                    <img id={styles[project.image.split('/')[2].split('.')[0]]} src={project.image} />
                    <div className={styles.textBox}>
                        <div className={styles.row}>
                            <h1>{project.title}</h1><p>{project.teamSize}</p>
                        </div>
                        {project.description.map((desc, descIndex) => (
                            <p key={descIndex}>{desc}</p>
                        ))}
                        <hr className={styles.horizontalRule} />
                        <p>주요기능 : <br />{project.keyFeature}</p>
                        <p>Github: <a href={project.githubLink} target="_blank" rel="noopener noreferrer">{project.github}</a></p>
                        <p>Demo: <a href={project.demoLink} target="_blank" rel="noopener noreferrer">{project.demo}</a></p>
                        <p>App: {project.app}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
