import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import MotionWrapper from "@/components/motion-wrapper";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <MotionWrapper>
          <Experience />
        </MotionWrapper>
        <MotionWrapper>
          <Projects />
        </MotionWrapper>
        <MotionWrapper>
          <Skills />
        </MotionWrapper>
        <MotionWrapper>
          <Contact />
        </MotionWrapper>
      </main>
      <Footer />
    </div>
  );
}
