export type SocialLink = {
  label: string;
  href: string;
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type ProjectItem = {
  title: string;
  description: string;
  stack: string[];
  links: {
    label: string;
    href: string;
  }[];
};

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  summary: string;
};

export type AchievementItem = {
  title: string;
  value: string;
  detail: string;
};
