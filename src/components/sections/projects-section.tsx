"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";
import { TechBadge } from "@/components/ui/tech-badge";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-space">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Projects"
            title="Featured Projects And Product Execution"
            subtitle="A showcase of systems I engineered with measurable improvements and production-minded architecture."
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.1}>
              <motion.article
                whileHover={{ y: -8, rotateX: 1.2, rotateY: -1.2 }}
                transition={{ duration: 0.2 }}
                className="glass-card interactive-card flex h-full flex-col rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{project.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <motion.li
                      key={item}
                      whileHover={{ y: -2 }}
                      className="list-none"
                    >
                      <TechBadge label={item} className="bg-surface text-[11px]" />
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-6 flex gap-4 text-sm font-semibold">
                  {project.links.map((link) => (
                    <Link key={link.label} href={link.href} className="text-brand hover:underline">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};
