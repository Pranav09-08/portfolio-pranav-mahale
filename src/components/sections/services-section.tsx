"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";

const services = [
  {
    title: "Backend Engineering",
    description:
      "Scalable APIs, modular service design, and performance-first architecture with Java and Spring Boot.",
  },
  {
    title: "Full-Stack Delivery",
    description:
      "End-to-end web application development with MERN, production workflows, and robust feature execution.",
  },
  {
    title: "GenAI Integrations",
    description:
      "Practical LLM and AI-agent integrations for intelligent product features and workflow automation.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="section-space">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Services"
            title="How I Can Help Build Your Product"
            subtitle="From architecture to implementation, I focus on measurable impact and shipping quality software."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.1}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.2 }}
                className="glass-card interactive-card rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold uppercase">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{service.description}</p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex text-xs font-semibold uppercase tracking-[0.2em] text-brand hover:text-brand-2"
                >
                  Discuss The Project
                </a>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};
