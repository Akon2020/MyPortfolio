import { IntroSection } from "@/components/about/intro-section";
import { SkillsMatrix } from "@/components/about/skills-matrix";
import { Timeline } from "@/components/about/timeline";
import { Philosophy } from "@/components/about/philosophy";

export const metadata = {
  title: "About | Isaac Akonkwa",
  description:
    "Learn about my journey as a Fullstack & Mobile Developer, my skills, experience, and philosophy on technology.",
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      <IntroSection />
      <SkillsMatrix />
      <Timeline />
      <Philosophy />
    </div>
  );
}
