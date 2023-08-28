import Intro from "@/components/Home/Intro";
import About from "@/components/Home/About";
import Skills from "@/components/Home/Skills";
import Projects from "@/components/Home/Projects";
import Contact from "@/components/Home/Contact";

export default function Home() {
    return (
        <div>
            <Intro />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}
