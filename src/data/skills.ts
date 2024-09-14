import { SiExpress, SiNextdotjs } from "react-icons/si";
import { FramerMotionIcon, ReactRouterDomIcon } from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "@/public/icons/html.svg";
import CssSvg from "@/public/icons/css.svg"; // Corrected the typo from CsssSvg to CssSvg
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";
import PythonSvg from "@/public/icons/python.svg";

// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
import MuiSvg from "@/public/icons/mui.svg";
import ViteSvg from "@/public/icons/vite.svg";

// Backend
import NodejsSvg from "@/public/icons/nodejs.svg";

// Database and ORMS
import MongoDBSvg from "@/public/icons/mongodb.svg";
import FirebaseSvg from "@/public/icons/firebase.svg"; // Corrected to FirebaseSvg for consistency

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import PostmanSvg from "@/public/icons/postman.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "HTML",
        icon: HtmlSvg,
      },
      {
        name: "CSS",
        icon: CssSvg,
      },
      {
        name: "Javascript",
        icon: JavascriptSvg,
      },
      {
        name: "Typescript",
        icon: TypescriptSvg,
      },
      {
        name: "Python",
        icon: PythonSvg,
      },
    ],
  },
  {
    sectionName: "Libraries and Frameworks",
    skills: [
      {
        name: "Reactjs",
        icon: ReactjsSvg,
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "React Router Dom",
        icon: ReactRouterDomIcon,
      },
      {
        name: "Tailwind CSS",
        icon: TailwindcssSvg,
      },
      {
        name: "MUI",
        icon: MuiSvg,
      },
      {
        name: "Framer Motion",
        icon: FramerMotionIcon,
      },
      {
        name: "Vite",
        icon: ViteSvg,
      },
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: NodejsSvg,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
    ],
  },
  {
    sectionName: "Databases",
    skills: [
      {
        name: "MongoDB",
        icon: MongoDBSvg,
      },
      {
        name: "Firebase",
        icon: FirebaseSvg,
      },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Git",
        icon: GitSvg,
      },
      {
        name: "Postman",
        icon: PostmanSvg,
      },
    ],
  },
];
