import {isMobileDevice} from "@/lib/utils";
import Intro from "@/components/Intro";
import About from "@/components/About";
import SectionDivider from "@/components/SectionDivider";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  const isMobile = isMobileDevice()

  return <main className="flex flex-col items-center justify-center px-4 overflow-x-hidden">
    <Intro />
    <SectionDivider />
    <About />
    <Projects />
    <Skills />
    <Experience isMobile={isMobile} />
  </main>
}