import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";

export const ContactSection = () => {
  return (
    <section id="contact" className="section-space pb-20">
      <Container>
        <Reveal>
          <div className="glass-card rounded-3xl p-8 md:p-10">
            <SectionTitle
              eyebrow="Contact"
              title="Interested In Talking, Let Us Build It"
              subtitle="Open for internships, backend engineering opportunities, and high-impact software projects."
            />
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex rounded-full bg-brand px-6 py-3 text-sm font-semibold text-background transition hover:opacity-90"
            >
              Email Me
            </a>
            <p className="mt-4 text-sm text-muted">
              {siteConfig.email} | {siteConfig.phone} | {siteConfig.location}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};
