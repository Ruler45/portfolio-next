import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import React from "react";
import Heading from "./Heading";
import timelineData from "@/data/timeline.json";

export function TimelineDemo() {
  const data = timelineData.map((item) => {
    return {
      title: item.title,
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
            {item.text}
          </p>
          {item.images && item.images.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {item.images.map((src: string, i: number) => (
                <div
                  key={i}
                  className="relative min-h-44 md:min-h-52 lg:min-h-56 h-auto max-w-[30vw] min-w-56 w-[44%]"
                >
                  <Image
                    src={src}
                    alt={item.title + " image " + i}
                    fill
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      ),
    };
  });

  return (
    <div className="w-full" id="about">
      <div className="w-full mx-auto py-10 px-4 md:px-8 lg:px-10 flex-col flex items-center justify-center">
        <Heading heading="About Me" />
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-lg max-w-md">
          I&apos;m a B. Tech Graduate from National Institute of Technology
          Silchar. Here&apos;s a brief timeline of recent work and highlights.
        </p>
      </div>
      <Timeline data={data} />
    </div>
  );
}
