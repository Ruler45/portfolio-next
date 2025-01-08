import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import React from "react";
import Heading from "./Heading";
import LottieAnimation from "./lottie";

export function TimelineDemo() {
  const data = [
    {
      title: "Late 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
            Carried out my responsibilites as{" "}
            <i>the Software Track Head and Event Management Moderator</i> at{" "}
            <strong>NITS-HACKS 7.0</strong> and successfully conducted various
            events under it&apos;s banner.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="relative min-h-44 md:min-h-52 lg:min-h-56   h-auto max-w-[30vw] min-w-56  w-[44%]">
              <Image
                src="/gif/nitshacks.png"
                alt="hero template"
                fill
                className=" bg-black rounded-lg"
              />
            </div>
            <div className="relative min-h-44 md:min-h-52 lg:min-h-56   h-auto max-w-[30vw] min-w-56  w-[44%]">
              <Image
                src="/gif/nitshacks1.jpg"
                alt="hero template"
                fill
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
            <div className="relative min-h-44 md:min-h-52 lg:min-h-56   h-auto max-w-[30vw] min-w-56  w-[44%]">
              <Image
                src="/gif/nitshacks2.jpg"
                alt="hero template"
                fill
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Mid 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
            Appointed as Technical Head at <strong> E-cell, NIT Silchar</strong>{" "}
            and Cloud Moderator at <strong>GDGC NIT Silchar</strong>
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="relative min-h-44 md:min-h-52 lg:min-h-56   h-auto max-w-[30vw] min-w-56  w-[44%]">
              <Image
                src="https://assets.aceternity.com/pro/hero-sections.png"
                alt="hero template"
                fill
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
            <div className="relative min-h-44 md:min-h-52 lg:min-h-56   h-auto max-w-[30vw] min-w-56  w-[44%]">
              {/* <Image
                src="/gif/gdgc_logo_animated.gif"
                alt="hero template"
                fill
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              /> */}
              <LottieAnimation />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Early 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
            <strong> It was time for me to grow my technical skills</strong>
          </p>
          <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4l">
            <li>
              ✅ Joined Incand&#39;23 &#39;s Technical team and helped in
              building the event website. Was appointed as the team lead,
              responsible for leading the team and ensuring the website was
              built on time and maintain the flow of information between
              different teams.
            </li>
            <li>
              ✅ Once website was built, it was time for enjoyment and fun.
              Along one of my friends, we organized <strong>Costopia</strong>,
              cosplay event at North-East&#39;s biggest cultural fest
            </li>
          </ul>
          <div className="flex flex-wrap gap-4">
            <div className="relative min-h-44 md:min-h-52 lg:min-h-56   h-auto max-w-[30vw] min-w-56  w-[44%]">
              <Image
                src="https://assets.aceternity.com/pro/hero-sections.png"
                alt="hero template"
                fill
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
            <div className="relative min-h-44 md:min-h-52 lg:min-h-56   h-auto max-w-[30vw] min-w-56  w-[44%]">
              <Image
                src="https://assets.aceternity.com/pro/hero-sections.png"
                alt="hero template"
                fill
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
            <div className="relative min-h-44 md:min-h-52 lg:min-h-56   h-auto max-w-[30vw] min-w-56 w-[44%]">
              <Image
                src="https://assets.aceternity.com/pro/bento-grids.png"
                alt="hero template"
                fill
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
            <strong>
              {" "}
              Hopped onto multiple clubs and societies at NIT Silchar to explore
              my hobbies and interests and also to learn new skills.
            </strong>
          </p>
          <ul className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4l">
            <li>
              ✅ Joined Dramatic&apos;s Club to explore my acting skills and to
              learn how to express myself in front of a crowd.
            </li>
            <li>
              ✅ Volunteered at Gyansagar, the social welfare wing of NIT
              Silchar, to help the underprivileged and to give back to the
              society.
            </li>
            <li>
              ✅ Volunteered in Incand&#39;23 &#39;s various teams to learn,
              explore and to gain experience in various fields. Most important
              take away were the friends made and times enjoyed.
            </li>
          </ul>
          <div className="flex flex-wrap gap-4">
            <div className="relative min-h-44 md:min-h-52 lg:min-h-56   h-auto max-w-[30vw] min-w-56  w-[44%]">
              <Image
                src="https://assets.aceternity.com/pro/hero-sections.png"
                alt="hero template"
                fill
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
            <div className="relative min-h-44 md:min-h-52 lg:min-h-56   h-auto max-w-[30vw] min-w-56  w-[44%]">
              <Image
                src="https://assets.aceternity.com/pro/hero-sections.png"
                alt="hero template"
                fill
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
            <div className="relative min-h-44 md:min-h-52 lg:min-h-56   h-auto max-w-[30vw] min-w-56 w-[44%]">
              <Image
                src="https://assets.aceternity.com/pro/bento-grids.png"
                alt="hero template"
                fill
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Late 2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
            Started Studying at{" "}
            <strong>National Institute Of Technology Silchar</strong>
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="relative min-h-44 md:min-h-52 lg:min-h-56   h-auto max-w-[30vw] min-w-56  w-[44%]">
              <Image
                src="https://assets.aceternity.com/pro/hero-sections.png"
                alt="hero template"
                fill
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
            <div className="relative min-h-44 md:min-h-52 lg:min-h-56   h-auto max-w-[30vw] min-w-56  w-[44%]">
              <Image
                src="https://assets.aceternity.com/pro/hero-sections.png"
                alt="hero template"
                fill
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full" id="about">
      <div className="w-full mx-auto py-10 px-4 md:px-8 lg:px-10 flex-col flex items-center justify-center">
        <Heading heading="About Me" />
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-lg max-w-md">
          I&apos;m a pre-final year student at national Institute of Technology
          Silchar. Here&apos;s my 2 years at NIT Silchar.
        </p>
      </div>
      <Timeline data={data} />
    </div>
  );
}
