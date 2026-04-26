import { AboutSection } from "@/components/sections/about-section";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { TechMarqueeSection } from "@/components/sections/tech-marquee-section";

export default function Home() {
  return (
    <main className="snap-shell flex-1">
      <HeroSection />
      <TechMarqueeSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <AchievementsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}
