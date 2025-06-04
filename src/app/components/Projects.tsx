import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import Heading from "./Heading";

const data = [
  {
    title: "Linkedfy",
    description:
      "A powerful CLI tool that revolutionizes LinkedIn automation. Built with Node.js, it enables users to effortlessly connect with professionals and send personalized messages through the command line. Available on npm and open source on GitHub, making professional networking more efficient and accessible.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image
          src="/linkedfy.png"
          width={500}
          height={300}
          className="h-full w-full object-cover rounded-lg"
          alt="Linkedfy CLI Tool"
        />
      </div>
    ),
  },
  {
    title: "E-Cell NITS Website",
    description:
      "Led the development of the official website for the Entrepreneurship Cell at NIT Silchar. Built with JavaScript and modern web technologies, this platform serves as a hub for entrepreneurial activities and events at the institute.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image
          src="/ecell.png"
          width={500}
          height={300}
          className="h-full w-full object-cover rounded-lg"
          alt="E-Cell NITS Website"
        />
      </div>
    ),
  },
  {
    title: "Incand 2024 Frontend",
    description:
      "Developed the frontend for Incand 2024, the official event platform. Created an engaging and responsive user interface using modern JavaScript frameworks to showcase and manage event details, registrations, and schedules.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image
          src="/incand.png"
          width={500}
          height={300}
          className="h-full w-full object-cover rounded-lg"
          alt="Incand 2024 Frontend"
        />
      </div>
    ),
  },
  {
    title: "Nanolink",
    description:
      "Contributed to the development of Nanolink, a URL shortening service built with TypeScript. This project demonstrates my expertise in building efficient web applications with modern tech stacks and best practices.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image
          src="/nanolink.png"
          width={500}
          height={300}
          className="h-full w-full object-cover rounded-lg"
          alt="Nanolink Project"
        />
      </div>
    ),
  },
];

const Projects = () => {
  return (
    <div className="p-10" id="projects">
      <Heading heading="Projects" />
      <StickyScroll content={data} />
    </div>
  );
};

export default Projects;
