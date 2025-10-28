import { Trophy, Award } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type Achievement = {
  title: string;
  type: "competition" | "academic" | "certification";
  year: string;
  description: string;
  icon: LucideIcon;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    title: "Google Data Analytics",
    type: "certification",
    year: "",
    description: "Professional certificate in data analytics (Coursera).",
    icon: Award,
    link: "https://coursera.org/verify/professional-cert/PGV00P0WR0C6",
  },
  {
    title: "VPBank Cloud Quest 2024",
    type: "competition",
    year: "2024",
    description: "Top 5 team in the VPBank Cloud Quest 2024 competition.",
    icon: Trophy,
    link: "",
  },
];
