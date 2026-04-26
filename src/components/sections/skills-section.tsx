"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";
import { TechBadge } from "@/components/ui/tech-badge";
import { TechIcon } from "@/components/ui/tech-icon";

const featuredTechnologies = [
  { name: "Java", label: "Java" },
  { name: "C++", label: "C++" },
  { name: "Spring Boot", label: "Spring Boot" },
  { name: "MERN Stack", label: "MERN" },
  { name: "MySQL", label: "MySQL" },
  { name: "PostgreSQL", label: "PostgreSQL" },
  { name: "MongoDB", label: "MongoDB" },
  { name: "Docker", label: "Docker" },
  { name: "Git", label: "Git" },
  { name: "GitHub", label: "GitHub" },
  { name: "Vercel", label: "Vercel" },
  { name: "Generative AI", label: "GenAI" },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="section-space">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="What I Do"
            title="Technology stack and engineering toolkit"
            subtitle="A cleaner, icon-led presentation inspired by premium portfolio layouts."
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredTechnologies.map((tech, index) => (
            <Reveal key={tech.name} delay={index * 0.05}>
              <motion.article
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="glass-card interactive-card flex min-h-[230px] flex-col items-center justify-center rounded-[1.75rem] p-6 text-center"
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-border bg-surface-2 shadow-inner">
                  <TechIcon name={tech.name} className="text-6xl" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{tech.label}</h3>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.08}>
              <article className="glass-card rounded-2xl p-6">
                <h3 className="text-lg font-semibold">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="list-none">
                      <TechBadge label={skill} />
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};
