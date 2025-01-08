import { BackgroundLines } from "@/components/ui/background-lines";

const Hero = () => {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 relative my-8 sm:my-0">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Congo! You landed on <br />
        Sahin&apos;s Portfolio.
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        <strong> Sahin Alam</strong> is a <i> developer</i>,
        <i> cloud enthusiast</i>, and a full-time learner. He is a passionate
        developer, who loves to build web applications and explore new
        technologies. He is also an actor,leader, and a team player. You name it
        and he can be that person but not what you are thinking.
      </p>
    </BackgroundLines>
  );
};

export default Hero;
