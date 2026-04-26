"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, socialLinks } from "@/config/site";
import { Container } from "@/components/ui/container";

export const HeroSection = () => {
  return (
    <section className="section-space relative overflow-hidden pb-20 pt-20 md:pt-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.11,
                },
              },
            }}
          >
            <motion.p
                className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-brand"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              Open To Internships | Pune, India
            </motion.p>
            <motion.h1
              className="hero-gradient-text max-w-2xl text-4xl font-black uppercase leading-[1.03] md:text-6xl"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
                Building The Future,
              <br />
              One System At A Time.
            </motion.h1>
            <motion.p
              className="mt-6 max-w-2xl text-lg leading-8 text-muted"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              {siteConfig.intro}
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <Link
                href="#projects"
                className="rounded-full bg-gradient-to-r from-brand to-brand-2 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_32px_-14px_rgba(15,111,127,0.35)] transition hover:-translate-y-0.5 hover:opacity-95"
              >
                View Projects
              </Link>
              <Link
                href={siteConfig.resumePath}
                target="_blank"
                className="rounded-full border border-brand/30 bg-white px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-brand"
              >
                Download Resume
              </Link>
            </motion.div>

            <motion.div
              className="mt-6 flex flex-wrap gap-3"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              {["B.E IT (CGPA 9.67)", "Spring Boot + Microservices", "MERN Full-Stack", "Generative AI"].map((item) => (
                <span key={item} className="soft-pill rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-muted">
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              className="mt-7 flex flex-wrap items-center gap-4 text-sm text-muted"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-border bg-surface/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] transition hover:border-brand hover:text-brand"
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
          >
            <div className="float-card profile-ring">
              <div className="glass-card interactive-card rounded-3xl p-4">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="/images/profile.jpeg"
                    alt="Profile placeholder"
                    width={420}
                    height={500}
                    className="h-[320px] w-full object-cover"
                    priority
                  />
                </div>
                <p className="profile-note mt-4 rounded-xl px-4 py-3 text-xs text-muted">
                  Add your image to public/images/profile.jpeg to personalize this portrait area.
                </p>
              </div>
            </div>

            <div className="glass-card interactive-card rounded-3xl p-7">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">At A Glance</p>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-muted">
                <li>Backend-focused engineer with production-style internship delivery across multiple domains.</li>
                <li>Winner at IETE 2025 and solved 400+ DSA problems across coding platforms.</li>
                <li>Building scalable systems with Java, Spring Boot, MERN, and practical GenAI integration.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
