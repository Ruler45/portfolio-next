"use client";

import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";
import { ContactForm } from "@/components/ui/contact-form";
import React from "react";
import Heading from "./Heading";

export default function WorkWithMe() {
  return (
    <div className="w-[90vw] mx-auto space-y-8" id="work">
      <Heading heading="Hire Me (Yes, Really)" />
      <div className="flex items-center justify-center rounded-2xl w-full">
        <TextRevealCard text="You have problems" revealText="I write the fixes">
          <TextRevealCardTitle>Wanna work together?</TextRevealCardTitle>
          <TextRevealCardDescription>
            Tell me the problem, the deadline, and stop sweet-talking.
          </TextRevealCardDescription>
        </TextRevealCard>
      </div>

      <div className="max-w-3xl mx-auto">
        <p className="text-muted-foreground text-center mb-8">
          Got a real project and a deadline? Fill this out — tell me what
          actually needs doing and I might reply faster than a week.
        </p>
        <div className="bg-card border rounded-lg p-6">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
