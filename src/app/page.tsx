// import { BackgroundLines } from "@/components/ui/background-lines";
// import { Button } from "@/components/ui/button";
// import { ModeToggle } from "@/components/ui/modeToggle";
import Image from "next/image";
import Navbar from "./components/Navbar";
import { TimelineDemo } from "./components/TimelineDemo";
import WorkWithMe from "./components/WorkWith";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col  items-center justify-items-center min-h-screen pb-4  gap-4 sm:p-2 font-[family-name:var(--font-geist-sans)] ">
      <Navbar />
      <main className="flex flex-col gap-8 items-center justify-items-center w-full my-10">
        <Hero />
        <TimelineDemo />
        <Skills />
        <Projects />
        <WorkWithMe />
        <div className=" h-[100vh]"></div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/ruler45"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Visit my Github →
        </a>
      </footer>
    </div>
  );
}
