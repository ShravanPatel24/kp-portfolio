"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After finishing my graduation{" "}
        <span className="font-medium"> I chose to follow my</span>, dream of
        becoming a Software Developer. I enrolled in a coding bootcamp and
        learned <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">
          I am a great problem-solver with good organisational, creative, and
          analytical abilities. High intellectual capacity to pick up. Remember,
          and use new ideas of various levels of complexity, cooperative and
          helpful team member with the capacity to think and operate well on
          their own.{" "}
        </span>
      </p>
      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        playing video games, watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
}
