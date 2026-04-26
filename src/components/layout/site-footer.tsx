import { siteConfig, socialLinks } from "@/config/site";
import { Container } from "@/components/ui/container";

export const SiteFooter = () => {
  return (
    <footer className="mt-8 border-t border-border/80 py-8">
      <Container className="flex flex-col gap-5 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>
          {new Date().getFullYear()} {siteConfig.name}. Crafted with Next.js, Tailwind, and MDX.
        </p>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="hover:text-brand">
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
};
