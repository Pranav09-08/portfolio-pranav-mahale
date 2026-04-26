import { IconType } from "react-icons";
import {
  SiDocker,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiSpring,
  SiVercel,
  SiRender,
  SiNodedotjs,
  SiOpenai,
  SiCplusplus,
} from "react-icons/si";
import { FaBrain, FaCode, FaDatabase, FaJava } from "react-icons/fa6";

type IconConfig = {
  Icon: IconType;
  color: string;
};

const iconMap: Record<string, IconConfig> = {
  java: { Icon: FaJava, color: "text-[#f89820]" },
  "c++": { Icon: SiCplusplus, color: "text-[#6aa6ff]" },
  javascript: { Icon: SiJavascript, color: "text-[#f7df1e]" },
  sql: { Icon: FaDatabase, color: "text-[#8fb9ff]" },
  "spring boot": { Icon: SiSpring, color: "text-[#6db33f]" },
  "rest apis": { Icon: FaCode, color: "text-[#9db5e0]" },
  microservices: { Icon: FaCode, color: "text-[#9db5e0]" },
  "mern stack": { Icon: SiNodedotjs, color: "text-[#7bc572]" },
  mysql: { Icon: SiMysql, color: "text-[#67b7ff]" },
  postgresql: { Icon: SiPostgresql, color: "text-[#8fb1ff]" },
  tidb: { Icon: FaDatabase, color: "text-[#93abce]" },
  mongodb: { Icon: SiMongodb, color: "text-[#00ed64]" },
  "generative ai": { Icon: SiOpenai, color: "text-[#7ae7c7]" },
  "llm integration": { Icon: FaBrain, color: "text-[#a8bcff]" },
  "spring ai": { Icon: FaBrain, color: "text-[#a8bcff]" },
  "ai agents": { Icon: FaBrain, color: "text-[#a8bcff]" },
  git: { Icon: SiGit, color: "text-[#f1502f]" },
  github: { Icon: SiGithub, color: "text-[#edf3ff]" },
  docker: { Icon: SiDocker, color: "text-[#2292e7]" },
  postman: { Icon: FaCode, color: "text-[#ff8b6a]" },
  render: { Icon: SiRender, color: "text-[#46e3b7]" },
  vercel: { Icon: SiVercel, color: "text-[#edf3ff]" },
  "workflow automation": { Icon: FaCode, color: "text-[#9db5e0]" },
  analytics: { Icon: FaDatabase, color: "text-[#9ec6ff]" },
};

const normalize = (name: string) => name.trim().toLowerCase();

type TechIconProps = {
  name: string;
  className?: string;
};

export const TechIcon = ({ name, className }: TechIconProps) => {
  const key = normalize(name);
  const config = iconMap[key];

  if (!config) {
    return <FaCode className={`${className ?? ""} text-[#9db5e0]`.trim()} aria-hidden />;
  }

  const { Icon, color } = config;
  return <Icon className={`${className ?? ""} ${color}`.trim()} aria-hidden />;
};
