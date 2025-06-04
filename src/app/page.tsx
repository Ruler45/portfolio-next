// import { BackgroundLines } from "@/components/ui/background-lines";
// import { Button } from "@/components/ui/button";
// import { ModeToggle } from "@/components/ui/modeToggle";
// import Image from "next/image";
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
        {/* <div className=" h-[100vh]"></div> */}
      </main>
    </div>
  );
}
