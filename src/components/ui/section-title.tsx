type SectionTitleProps = {
  title: string;
  eyebrow?: string;
  subtitle?: string;
};

export const SectionTitle = ({ title, eyebrow, subtitle }: SectionTitleProps) => {
  return (
    <header className="mb-10 max-w-2xl">
      {eyebrow ? (
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-brand">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-black uppercase leading-tight md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-base leading-7 text-muted">{subtitle}</p> : null}
    </header>
  );
};
