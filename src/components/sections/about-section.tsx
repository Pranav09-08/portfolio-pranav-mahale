import { aboutPoints } from "@/data/portfolio";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";

export const AboutSection = () => {
  return (
    <section id="about" className="section-space">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="About"
            title="Building software with impact and clarity"
            subtitle="This section can be quickly personalized from your resume summary, achievements, and career objective."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {aboutPoints.map((point, index) => (
            <Reveal key={point} delay={index * 0.1}>
              <article className="glass-card interactive-card rounded-2xl p-6 text-muted">
                <p className="text-base leading-7">{point}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};
