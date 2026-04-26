"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-space">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Achievements"
            title="Proof of performance and consistency"
            subtitle="Impact metrics and recognitions that strengthen recruiter confidence at a glance."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {achievements.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -7 }}
                transition={{ duration: 0.2 }}
                className="glass-card interactive-card rounded-2xl p-6"
              >
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand">{item.value}</p>
                <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.detail}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};
