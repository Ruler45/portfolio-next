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

      <div className="max-w-3xl mx-auto">
        <p className="text-muted-foreground text-center mb-8">
          Ready to start a project? Fill out the form below and I&apos;ll get
          back to you as soon as possible.
        </p>
        <div className="bg-card border rounded-lg p-6">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
