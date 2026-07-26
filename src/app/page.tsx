import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/hero";

const About = dynamic(() =>
  import("@/components/sections/about").then((mod) => mod.About)
);
const Skills = dynamic(() =>
  import("@/components/sections/skills").then((mod) => mod.Skills)
);
const Projects = dynamic(() =>
  import("@/components/sections/projects").then((mod) => mod.Projects)
);
const Timeline = dynamic(() =>
  import("@/components/sections/timeline").then((mod) => mod.Timeline)
);
const CodingProfiles = dynamic(() =>
  import("@/components/sections/coding-profiles").then((mod) => mod.CodingProfiles)
);
const Contact = dynamic(() =>
  import("@/components/sections/contact").then((mod) => mod.Contact)
);

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <CodingProfiles />
      <Contact />
    </main>
  );
}