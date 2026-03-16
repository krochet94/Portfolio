import type { IconType } from "react-icons";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import {
  DiCss3,
  DiGit,
  DiHtml5,
  DiJavascript1,
  DiMongodb,
  DiNodejs,
  DiPython,
  DiReact,
  DiVisualstudio,
} from "react-icons/di";
import { FaAws, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiGithub,
  SiGitlab,
  SiHeroku,
  SiJira,
  SiNextdotjs,
  SiPostman,
  SiRedux,
  SiTrello,
  SiVercel,
} from "react-icons/si";

const iconMap: Record<string, IconType> = {
  AiFillGithub,
  AiOutlineTwitter,
  DiCss3,
  DiGit,
  DiHtml5,
  DiJavascript1,
  DiMongodb,
  DiNodejs,
  DiPython,
  DiReact,
  DiVisualstudio,
  FaAws,
  FaFacebook,
  FaLinkedinIn,
  SiExpress,
  SiFirebase,
  SiGithub,
  SiGitlab,
  SiHeroku,
  SiJira,
  SiNextdotjs,
  SiPostman,
  SiRedux,
  SiTrello,
  SiVercel,
};

export function getIconComponent(iconName: string): IconType | null {
  return iconMap[iconName] ?? null;
}
