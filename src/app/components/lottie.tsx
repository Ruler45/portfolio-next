"use client";

import dotsAnimation from "../../../public/lottie/gdg-animation.json";
import dynamic from "next/dynamic";

const LottiePlayer = dynamic(() => import("lottie-react"), {
  ssr: false, // This disables server-side rendering for this component
});

const LottieAnimation = () => {
  return <LottiePlayer animationData={dotsAnimation} loop className="h-full" />;
};

export default LottieAnimation;
