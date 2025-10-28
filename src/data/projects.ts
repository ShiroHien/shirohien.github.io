export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    github: string;
    live: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Jewelry Showcase Website",
    description:
      "Full‑stack web application to showcase jewelry with a secure admin backend for non‑technical content management. Responsive UI built with React and Tailwind CSS; media served via Cloudinary.",
    image: "/imgs/p1.png",
    tags: ["React", "Node.js", "Express.js", "TypeScript", "MongoDB", "Cloudinary"],
    links: {
      github: "https://github.com/ShiroHien/jewelry-web",
      live: "",
    },
  },
  {
    id: 2,
    title: "Airlines Visual Analysis",
    description:
      "Explored root causes of flight delays across major Vietnamese airlines and built an interactive dashboard to surface patterns by route, time and carrier. Data processing and visualization implemented in Python.",
    image: "/imgs/p2.png",
    tags: ["Python", "Pandas", "NumPy", "Plotly", "Data Analysis"],
    links: {
      github: "",
      live: "https://youtu.be/1E0at54NGmk",
    },
  },
  {
    id: 3,
    title: "VR Pottery",
    description:
      "A thesis VR project that preserves Bat Trang pottery techniques in an interactive 3D experience; includes a custom algorithm for smoother pottery deformation.",
    image: "/imgs/p3.png",
    tags: ["C#", "Unity", "3D Simulation"],
    links: {
      github: "",
      live: "https://youtu.be/Ax6ecp05I5k",
    },
  },
  {
    id: 4,
    title: "AWS Web Deployment",
    description:
      "Demo project automating web app infrastructure on AWS using Terraform to provision network, DB, and load balancer, and Ansible to configure bastion and web servers.",
    image: "/imgs/p4.png",
    tags: ["Terraform", "Ansible", "AWS", "Infrastructure"],
    links: {
      github: "https://github.com/ShiroHien/aws-demo",
      live: "",
    },
  },
  {
    id: 5,
    title: "MagicPost",
    description:
      "Logistics platform supporting multiple user types with a customizable dashboard and interactive visualizations. Implemented as a MERN stack application.",
    image: "/imgs/p5.png",
    tags: ["MERN", "React", "Node.js", "MongoDB"],
    links: {
      github: "https://github.com/ShiroHien/MagicPost",
      live: "",
    },
  },
];
