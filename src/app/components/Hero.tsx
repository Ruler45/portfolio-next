import { BackgroundLines } from "@/components/ui/background-lines";

const Hero = () => {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 relative my-8 sm:my-0">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Nice. You found me.
        <br />
        I&apos;m Sahin, stubbornly effective.
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        <strong>Sahin Alam</strong> builds reliable web apps, slaps sense into
        messy codebases, and politely declines pointless meetings. If you want
        someone who ships features, knows the cloud, and points out the real
        problems. Congratulations, you&apos;re reading the right page.
        Don&apos;t send a generic &#34;hey&#34;; tell me the problem and the
        deadline.
      </p>
    </BackgroundLines>
  );
};

export default Hero;
