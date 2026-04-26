import { experiences } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="section-space">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Experience"
            title="Internships, clubs, and leadership"
            subtitle="Presenting your contributions in short, measurable statements keeps this section recruiter-friendly."
          />
        </Reveal>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <Reveal key={`${exp.role}-${exp.org}`} delay={index * 0.1}>
              <article className="glass-card interactive-card rounded-2xl p-6">
                <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <p className="font-mono text-xs uppercase tracking-widest text-brand">{exp.period}</p>
                </div>
                <p className="mt-1 text-sm font-medium text-foreground/80">{exp.org}</p>
                <p className="mt-3 text-sm leading-7 text-muted">{exp.summary}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};
