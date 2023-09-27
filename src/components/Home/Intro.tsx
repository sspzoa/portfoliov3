import Image from "next/image";

import styles from '@/styles/Home/Intro.module.css'

import logo from '@/Intro/sspzoa.png'
import dart from '@/Intro/dart.png'
import typescript from '@/Intro/typescript.png'
import kotlin from '@/Intro/kotlin.png'
import python from '@/Intro/python.png'

export default function Intro() {
    return (
        <div className={styles.container}>
            <a href="https://github.com/sspzoa" target="_blank" rel="noopener noreferrer"><Image id={styles.logo} src={logo} alt="Logo"/></a>
            <a href="https://dart.dev/guides" target="_blank" rel="noopener noreferrer"><Image id={styles.dart} src={dart} alt="Dart"/></a>
            <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer"><Image id={styles.typescript} src={typescript} alt="Typescript"/></a>
            <a href="https://kotlinlang.org/docs/home.html" target="_blank" rel="noopener noreferrer"><Image id={styles.kotlin} src={kotlin} alt="Kotlin"/></a>
            <a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer"><Image id={styles.python} src={python} alt="Python"/></a>
        </div>
    )
}
