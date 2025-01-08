import { WobbleCard } from "@/components/ui/wobble-card";
import Heading from "./Heading";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandCss3 } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";
import { RiTailwindCssLine, RiNextjsFill, RiSvelteLine } from "react-icons/ri";
// import { RiNextjsFill } from "react-icons/ri";

const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        icon: <AiOutlineHtml5 />,
        color: "text-orange-500",
        borderColor: "border-orange-400",
      },
      {
        name: "CSS",
        icon: <TbBrandCss3 />,
        color: "text-blue-500",
        borderColor: "border-blue-400",
      },
      {
        name: "JavaScript",
        icon: <IoLogoJavascript />,
        color: "text-yellow-500",
        borderColor: "border-yellow-400",
      },
      {
        name: "Tailwind CSS",
        icon: <RiTailwindCssLine />,
        color: "text-cyan-500",
        borderColor: "border-cyan-400",
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill />,
        color: "",
        borderColor: "border-white",
      },
      {
        name: "Svelte",
        icon: <RiSvelteLine />,
        color: "text-red-500",
        borderColor: "border-red-400",
      },
      {
        name: "React",
        icon: <FaReact />,
        color: "text-cyan-500",
        borderColor: "border-cyan-400",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "React",
        icon: <FaReact />,
        color: "text-cyan-500",
        borderColor: "border-cyan-400",
      },
      {
        name: "Next.js",
        icon: <FaReact />,
        color: "text-cyan-500",
        borderColor: "border-cyan-400",
      },
      {
        name: "Gatsby",
        icon: <FaReact />,
        color: "text-cyan-500",
        borderColor: "border-cyan-400",
      },
      {
        name: "Tailwind CSS",
        icon: <FaReact />,
        color: "text-cyan-500",
        borderColor: "border-cyan-400",
      },
      {
        name: "Styled Components",
        icon: <FaReact />,
        color: "text-cyan-500",
        borderColor: "border-cyan-400",
      },
      {
        name: "Chakra UI",
        icon: <FaReact />,
        color: "text-cyan-500",
        borderColor: "border-cyan-400",
      },
      {
        name: "Material UI",
        icon: <FaReact />,
        color: "text-cyan-500",
        borderColor: "border-cyan-400",
      },
      {
        name: "Redux",
        icon: <FaReact />,
        color: "text-cyan-500",
        borderColor: "border-cyan-400",
      },
      {
        name: "GraphQL",
        icon: <FaReact />,
        color: "text-cyan-500",
        borderColor: "border-cyan-400",
      },
    ],
  },
  {
    title: "Scripting",
    skills: [
      {
        name: "React",
        icon: <FaReact />,
        color: "text-cyan-500",
        borderColor: "border-cyan-400",
      },
      {
        name: "Next.js",
        icon: <FaReact />,
        color: "text-cyan-500",
        borderColor: "border-cyan-400",
      },
      {
        name: "Gatsby",
        icon: <FaReact />,
        color: "text-cyan-500",
        borderColor: "border-cyan-400",
      },
      {
        name: "Tailwind CSS",
        icon: <FaReact />,
        color: "text-cyan-500",
        borderColor: "border-cyan-400",
      },
      {
        name: "Styled Components",
        icon: <FaReact />,
        color: "text-cyan-500",
        borderColor: "border-cyan-400",
      },
      {
        name: "Chakra UI",
        icon: <FaReact />,
        color: "text-cyan-500",
        borderColor: "border-cyan-400",
      },
      {
        name: "Material UI",
        icon: <FaReact />,
        color: "text-cyan-500",
        borderColor: "border-cyan-400",
      },
      {
        name: "Redux",
        icon: <FaReact />,
        color: "text-cyan-500",
        borderColor: "border-cyan-400",
      },
      {
        name: "GraphQL",
        icon: <FaReact />,
        color: "text-cyan-500",
        borderColor: "border-cyan-400",
      },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      {
        name: "React",
        icon: <FaReact />,
        color: "text-red-500",
        borderColor: "border-red-400",
      },
      {
        name: "Next.js",
        icon: <FaReact />,
        color: "text-cyan-500",
        borderColor: "border-cyan-400",
      },
      {
        name: "Gatsby",
        icon: <FaReact />,
        color: "text-cyan-500",
        borderColor: "border-cyan-400",
      },
      {
        name: "Tailwind CSS",
        icon: <FaReact />,
        color: "text-cyan-500",
        borderColor: "border-cyan-400",
      },
      {
        name: "Styled Components",
        icon: <FaReact />,
        color: "text-cyan-500",
        borderColor: "border-cyan-400",
      },
      {
        name: "Chakra UI",
        icon: <FaReact />,
        color: "text-cyan-500",
        borderColor: "border-cyan-400",
      },
      {
        name: "Material UI",
        icon: <FaReact />,
        color: "text-cyan-500",
        borderColor: "border-cyan-400",
      },
      {
        name: "Redux",
        icon: <FaReact />,
        color: "text-cyan-500",
        borderColor: "border-cyan-400",
      },
      {
        name: "GraphQL",
        icon: <FaReact />,
        color: "text-cyan-500",
        borderColor: "border-cyan-400",
      },
    ],
  },
];
const Skills = () => {
  return (
    <div className="w-full" id="skills">
      <Heading heading="My Skills" />
      <div className="flex flex-wrap items-center justify-center w-full gap-8 py-4 px-10">
        {skills.map((skill) => {
          return (
            <WobbleCard
              key={skill.title}
              containerClassName="w-fill md:w-1/2 lg:w-[30%]  bg-[#0f172a]"
              className="flex flex-col items-center gap-4 bg-[#0f172a]"
            >
              <h3>{skill.title}</h3>
              <div className="flex flex-wrap gap-2 py-2 px-4 justify-center items-center">
                {skill.skills.map((skill) => {
                  return (
                    <span
                      key={skill.name}
                      className={`border-2 py-1 px-2 rounded-sm ${skill.borderColor} ${skill.color} flex items-center gap-1 hover:scale-105 cursor-pointer `}
                    >
                      {skill.icon}
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </WobbleCard>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
