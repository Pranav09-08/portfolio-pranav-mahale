"use client";

import { skillGroups } from "@/data/portfolio";
import { TechIcon } from "@/components/ui/tech-icon";

const repeated = (arr: string[]) => [...arr, ...arr, ...arr];

export const TechMarqueeSection = () => {
  const skills = repeated(skillGroups.flatMap((group) => group.skills));

  return (
    <section className="py-8 md:py-10">
      <div className="overflow-hidden border-y border-border bg-surface/50 py-4">
        <div className="marquee-track flex w-max gap-3 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.2em] text-muted md:text-sm">
          {skills.map((skill, index) => (
            <span key={`${skill}-${index}`} className="inline-flex items-center gap-3">
              <TechIcon name={skill} className="text-sm" />
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
