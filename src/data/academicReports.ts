import { FileText, BookOpen } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type AcademicReport = {
  title: string;
  link: string;
  highlights: string[];
  icon: LucideIcon;
};

export const academicReports: AcademicReport[] = [
  {
    title: "Object-Oriented System Design: Examination Management System",
    link: "https://drive.google.com/drive/folders/1pA-_tYEiK38owEDK3LAiYBPC9utHg9Ek?usp=sharing",
    highlights: [
      "Analyzed functional and non-functional requirements to design a scalable system architecture for a complex application.",
      "Produced comprehensive technical documentation including UML diagrams (Use Case, Class, Sequence) to model system behavior and structure for stakeholders.",
    ],
    icon: FileText,
  },
  {
    title: "Research Report: Generative Adversarial Networks (GANs)",
    link: "https://drive.google.com/drive/folders/1Hd4DjvSVQhm6hFfl2m8BCQJS_XTeyJss?usp=sharing",
    highlights: [
      "Conducted a literature review on the principles and state-of-the-art applications of GANs in machine learning.",
      "Synthesized complex technical concepts from multiple research papers into a clear, structured report, demonstrating an ability to quickly learn and explain emerging technologies.",
    ],
    icon: BookOpen,
  },
  {
    title: "Performance Testing Analysis: Grafana k6",
    link: "https://drive.google.com/drive/folders/1p6s5sFB7WEudF0C8rINfALzzlPH5zuEq?usp=sharing",
    highlights: [
      "Investigated the capabilities of the Grafana k6 framework for modern, developer-centric load testing.",
      "Authored a technical analysis comparing its performance against traditional tools, providing a data-backed recommendation for its use in CI/CD pipelines.",
    ],
    icon: FileText,
  },
  {
    title: "Research on VR for Cultural Preservation",
    link: "https://drive.google.com/drive/folders/1DS_Tuhkm065u7vzlkPxsN-tG8Q7LsN0r?usp=sharing",
    highlights: [
      "Conducted an in-depth literature review on the application of immersive technologies for cultural heritage preservation and promotion.",
      "Synthesized findings into a formal research proposal that formed the academic foundation for the A+ graded VR Pottery thesis project, demonstrating end-to-end research-to-development capabilities.",
    ],
    icon: BookOpen,
  },
];