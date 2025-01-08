"use client";

import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";
import React from "react";
import Heading from "./Heading";

export default function WorkWithMe() {
  return (
    <div className="w-full " id="work">
      <Heading heading="Work With Me" />
      <div className="flex items-center justify-center rounded-2xl w-full">
        <TextRevealCard
          text="You know the business"
          revealText="I know the Tech"
        >
          <TextRevealCardTitle>Wanna work together?</TextRevealCardTitle>
          <TextRevealCardDescription>
            Here&apos;s why we should work together.
          </TextRevealCardDescription>
        </TextRevealCard>
      </div>
    </div>
  );
}
