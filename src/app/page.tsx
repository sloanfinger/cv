import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Honors from "@/components/Honors";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Splash from "@/components/Splash";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "CV · Sloan Finger",
  description: "...",
};

export default function About() {
  return (
    <Splash>
      <Education />
      <Honors />
      <Skills />
      <Experience />
      <Projects />
    </Splash>
  );
}
