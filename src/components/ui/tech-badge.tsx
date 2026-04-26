import { TechIcon } from "@/components/ui/tech-icon";

type TechBadgeProps = {
  label: string;
  className?: string;
};

export const TechBadge = ({ label, className }: TechBadgeProps) => {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/85 px-3 py-1.5 text-xs font-semibold text-foreground shadow-[0_8px_20px_-16px_rgba(111,182,255,0.4)] ${className ?? ""}`.trim()}
    >
      <TechIcon name={label} className="text-sm" />
      {label}
    </span>
  );
};
