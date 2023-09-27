import Image from "next/image";

import styles from '@/styles/Home/Intro.module.css'

export default function Intro() {
    return (
        <div className={styles.container}>
            <a href="https://github.com/sspzoa" target="_blank" rel="noopener noreferrer"><img id={styles.logo} src='/Intro/sspzoa.png' alt="Logo"/></a>
            <a href="https://dart.dev/guides" target="_blank" rel="noopener noreferrer"><img id={styles.dart} src='/Intro/dart.png' alt="Dart"/></a>
            <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer"><img id={styles.typescript} src='/Intro/typescript.png' alt="Typescript"/></a>
            <a href="https://kotlinlang.org/docs/home.html" target="_blank" rel="noopener noreferrer"><img id={styles.kotlin} src='/Intro/kotlin.png' alt="Kotlin"/></a>
            <a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer"><img id={styles.python} src='/Intro/python.png'/></a>
        </div>
    )
}
