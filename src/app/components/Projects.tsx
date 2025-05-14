import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import Heading from "./Heading";

const data = [
  {
    title: "Linkedfy",
    description:
      "Effortlessly connect with professionals and send personalized messages on LinkedIn through the command-line. Check this out on GitHub and npmjs.Don't forget to contribute to the open source project. Let's make Linkedfy better together!",
    content: <div></div>,
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
];
const Projects = () => {
  return (
    <div className="p-10 " id="projects">
      <Heading heading="Projects" />
      <StickyScroll content={data} />
    </div>
  );
};

export default Projects;
