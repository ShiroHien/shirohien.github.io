import { Code, Layout, Terminal, Cpu, Palette, Languages  } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type SkillCategory = {
  name: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: Terminal,
    skills: [
      "Java",
      "Python",
      "C#",
      "HTML/CSS",
      "JavaScript/Typescript",
      "Tailwind CSS",
    ],
  },
  {
    name: "Frameworks and Platforms",
    icon: Layout,
    skills: ["React", "NodeJS", "Flask", "MongoDB"],
  },
  {
    name: "OS",
    icon: Cpu,
    skills: ["Windows", "Linux(Ubuntu)"],
  },
  {
    name: "Infrastructure",
    icon: Code,
    skills: ["Terraform", "Docker", "Azure", "AWS"],
  },
  {
    name: "Languages",
    icon: Languages,
    skills: ["English (TOEIC 990, IELTS 7.0, SAT 1410)"],
  },
  {
    name: "Skills",
    icon: Palette,
    skills: [
      "Task tracking",
      "Technical documentation",
      "Critical thinking Problem solving",
      "Presentation",
      "Teamwork",
    ],
  },
];
