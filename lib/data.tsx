import React from "react";
import {FaReact} from "react-icons/fa";
import {FaVuejs} from "react-icons/fa";
import {LuGraduationCap} from "react-icons/lu";
import rubicGameImage from "@/public/2048-game.png";
import breadditImage from "@/public/breaddit.png";
import dashboard from "@/public/dashboard.png";
import gameHubImage from "@/public/game-hub.png";
import typingSpeedImage from "@/public/typing-speed.png";
import Lunrron from '@/public/Lunroo.png'

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experiences",
    hash: "#experience",
  },
  // {
  //     name: "Contact",
  //     hash: "#contact",
  // },
] as const;


export const headerLanguageMap = {
  Home: '首页',
  About: '关于我',
  Projects: '我的项目',
  Skills: '我的技能',
  Experiences: '我的经历',
}

export const experiencesData = [
  {
    title: "Senior Frontend Engineer",
    location: "Easyview, Shenzhen, Mainland China",
    description:
      "As an experienced developer maintain CRM and Sass system and secure user story requirements, where a Hong Kong based fintech company spreading its operations also APAC and Europe and helping with external asset managers and family offices.",
    icon: React.createElement(FaReact),
    date: "2023 Aug - Present",
  },
  {
    title: "Frontend Developer",
    location: "Dragonpass, Guangzhou, Mainland China",
    description:
      "Maintain daily projects, start new projects from scratch and beef up facility infrastructure, totally got my hands dirty around 13 projects. All of business span across the world to provide the first class travel experience",
    icon: React.createElement(FaVuejs),
    date: "2018 Aug - 2023 Aug",
  },
  {
    title: "BEng in Computer Science",
    location: "Guangzhou College of Commerce, China",
    description:
      "Graduated with a Bachelor of Computer Science, Gained foundational knowledge in Computer Science and solid my code skill.",
    icon: React.createElement(LuGraduationCap),
    date: "2015 Sep - 2019 Jun",
  },

]

export const experiencesDataZn = [
  {
    title: "Senior Frontend Engineer",
    location: "Easyview, Shenzhen, Mainland China",
    description:
      "As an experienced developer maintain CRM and Sass system and secure user story requirements, where a Hong Kong based fintech company spreading its operations also APAC and Europe and helping with external asset managers and family offices.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 Aug - Present",
  },
  {
    title: "Frontend Developer",
    location: "Dragonpass, Guangzhou, Mainland China",
    description:
      "Maintain daily projects, start new projects from scratch and beef up facility infrastructure, totally got my hands dirty around 13 projects. All of business span across the world to provide the first class travel experience",
    icon: React.createElement(FaVuejs),
    date: "2018 Aug - 2023 Aug",
  },
  {
    title: "BEng in Computer Science",
    location: "Guangzhou College of Commerce, China",
    description:
      "Graduated with a Bachelor of Computer Science, Gained foundational knowledge in Computer Science and solid my code skill.",
    icon: React.createElement(FaReact),
    date: "2015 Sep - 2019 Jun",
  },
]


export type ProjectTags = typeof projectsData[number]["tags"];

export const projectsData = [
  {
    title: "Anisora AI",
    title_zh: 'Anisora AI',
    description: "Free open-source AI anime video generation tool.",
    desc_zh: "免费开源的AI动漫视频生成工具，支持文本生成动画、角色动作生成等功能.",
    tags: ["Next.js", "TypeScript", "Anime Video Generation", "PostgreSQL", 'TailwindCSS', 'Stripe'],
    imageUrl: Lunrron,
    projectUrl: '',
    demoUrl: 'https://www.anisora.ai',
  }
  // {
  //   title: "Easyview CRM",
  //   title_zh: "社交新闻论坛",
  //   description:
  //     `A workstation for our agents dedicated to their users with managing fortune, addressing challenges, enhancing performance, and fostering business scalability.`,
  //   desc_zh: "A workstation for our agents dedicated to their users with managing fortune, addressing challenges, enhancing performance, and fostering business scalability.",
  //   tags: ["Vue", "d3", "file handling", "online editor"],
  //   imageUrl: dashboard,
  //   projectUrl: '',
  //   demoUrl: 'https://t-fargo-crm.easyview.xyz/',
  //   videoUrl: 'https://player.vimeo.com/video/1009449270?h=2729f267a0'
  // },
]

export const skillsData = [
  "TypeScript",
  "React",
  "Next.js",
  "Vue.js",
  "Nodejs",
  "Express",
  "Nest.js",
  "Prisma",
  "TailwindCSS",
  "NextAuth",
  "Turborepo",
  "HTML",
  "CSS",
  "JavaScript",
  "Git",
  "Shadcn UI",
  "Antd Design",
  "PostgreSQL",
  "MySQL"
] 
