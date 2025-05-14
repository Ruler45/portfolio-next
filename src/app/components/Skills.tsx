import { WobbleCard } from "@/components/ui/wobble-card";
import Heading from "./Heading";

const skills = [
  {
    title: "Languages",
    skills: [
      {
        name: "HTML",
        icon: "icon-[vscode-icons--file-type-html]",
        color: "text-orange-500",
        borderColor: "border-orange-400",
      },
      {
        name: "CSS",
        icon: "icon-[devicon--css3]",
        color: "text-blue-500",
        borderColor: "border-blue-400",
      },

      {
        name: "Java",
        icon: "icon-[devicon--java]",
        color: "text-red-500",
        borderColor: "border-blue-500",
      },
      {
        name: "Python",
        icon: "icon-[devicon--python]",
        color: "text-blue-500",
        borderColor: "border-yellow-400",
      },
      {
        name: "JavaScript",
        icon: "icon-[devicon--javascript]",
        color: "text-yellow-500",
        borderColor: "border-yellow-400",
      },
      {
        name: "TypeScript",
        icon: "icon-[devicon--typescript]",
        color: "",
        borderColor: "border-blue-500",
      },
      {
        name: "SQL",
        icon: "icon-[oui--vis-query-sql]",
        color: "text-amber-500",
        borderColor: "border-cyan-400",
      },
    ],
  },
  {
    title: "Libraries & Frameworks",
    skills: [
      {
        name: "Tailwind CSS",
        icon: "icon-[skill-icons--tailwindcss-dark]",
        color: "text-cyan-500",
        borderColor: "border-cyan-400",
      },

      {
        name: "Sass",
        icon: "icon-[logos--sass]",
        color: "text-pink-500",
        borderColor: "border-pink-400",
      },
      {
        name: "Next.js",
        icon: "icon-[devicon--nextjs]",
        color: "",
        borderColor: "border-white",
      },
      {
        name: "Svelte",
        icon: "icon-[logos--svelte-icon]",
        color: "text-red-500",
        borderColor: "border-red-400",
      },
      {
        name: "React",
        icon: "icon-[logos--react]",
        color: "text-cyan-500",
        borderColor: "border-cyan-400",
      },
      {
        name: "Node.js",
        icon: "icon-[skill-icons--nodejs-dark]",
        color: "text-green-500",
        borderColor: "border-green-400",
      },
      {
        name: "Express.js",
        icon: "icon-[skill-icons--expressjs-dark]",
        color: "text-gray-300",
        borderColor: "border-gray-400",
      },
      {
        name: "ShadCn",
        icon: "icon-[simple-icons--shadcnui]",
        color: "text-blue-500",
        borderColor: "border-gray-400",
      },
      {
        name: "Puppeteer",
        icon: "icon-[logos--puppeteer]",
        color: "text-green-500",
        borderColor: "border-teal-800",
      },
    ],
  },
  {
    title: "Tools & Databases",
    skills: [
      {
        name: "MongoDb",
        icon: "icon-[skill-icons--mongodb]",
        color: "text-emerald-800",
        borderColor: "border-emerald-950",
      },
      {
        name: "MySQL",
        icon: "icon-[logos--mysql]",
        color: "text-amber-500",
        borderColor: "border-sky-500",
      },
      {
        name: "Git",
        icon: "icon-[devicon--git]",
        color: "text-gray-500",
        borderColor: "border-red-500",
      },
      {
        name: "GitHub",
        icon: "icon-[skill-icons--github-light]",
        color: "text-gray-500",
        borderColor: "border-gray-400",
      },
      {
        name: "Bash Scripting",
        icon: "icon-[logos--bash-icon]",
        color: "text-ehite",
        borderColor: "border-emerald-700",
      },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      {
        name: "AWS",
        icon: "icon-[skill-icons--aws-dark]",
        color: "text-yello-700",
        borderColor: "border-teal-800",
      },
      {
        name: "Docker",
        icon: "icon-[vscode-icons--file-type-docker2]",
        color: "",
        borderColor: "border-sky-500",
      },
      {
        name: "Vercel",
        icon: "icon-[skill-icons--vercel-light]",
        color: "",
        borderColor: "border-black",
      },
      {
        name: "Netlify",
        icon: "icon-[vscode-icons--file-type-light-netlify]",
        color: "text-cyan-500",
        borderColor: "border-emerald-700",
      },
      {
        name: "Cloudflare",
        icon: "icon-[devicon--cloudflare]",
        color: "text-amber-500",
        borderColor: "border-yellow-400",
      },
      {
        name: "Linux",
        icon: "icon-[devicon--linux]",
        color: "text-yellow-500",
        borderColor: "border-gray-400",
      },
    ],
  },
];
const Skills = () => {
  return (
    <div className="w-full my-8" id="skills">
      <Heading heading="My Skills" />
      <div className="flex flex-wrap items-center justify-center w-full gap-8 py-4 px-10">
        {skills.map((skill) => {
          return (
            <WobbleCard
              key={skill.title}
              containerClassName="w-fill md:w-1/2 lg:w-[30%]  bg-[#0f172a]"
              className="flex flex-col items-center gap-4 dark:bg-[#0f172a] bg-gray-100 border"
            >
              <h3>{skill.title}</h3>
              <div className="flex flex-wrap gap-2 py-2 px-4 justify-center items-center">
                {skill.skills.map((skill) => {
                  return (
                    <span
                      key={skill.name}
                      className={`border-2 py-1 px-2 rounded-sm ${skill.borderColor} ${skill.color} flex items-center gap-1 hover:scale-105 cursor-pointer `}
                    >
                      {/* {skill.icon} */}
                      <span className={skill.icon}></span>
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
