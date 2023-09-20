import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import recipeImg from "@/public/recipe.png";
import ecomImg from "@/public/ecom.jpg";
import fabfusionImg from "@/public/fabfusion.png";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Higher Secondary Education",
    location: "Govt. senior sec School | Swaroopganj | Rajasthan",
    description: "Science",
    icon: React.createElement(LuGraduationCap),
    date: "2011 - 2012",
  },
  {
    title: "Graduated",
    location: "Bhilwara, Rajasthan",
    description: "I'm a B.TECH. graduate from MLV College (RTU) ",
    icon: React.createElement(LuGraduationCap),
    date: "2012 - 2016",
  },
  {
    title: "ASSOCIATE MERCHANDISER",
    location: "SIDDHARTH PVT LTD, JAIPUR",
    description:
      "I have handled the intricate processes within the industry, from meticulous sampling and the preparation of internal order sheets to precise product costing. Additionally, I excel in the efficient management of accessories and trims, ensuring seamless in-house operations.",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2018",
  },
  {
    title: "MERCHANDISER",
    location: "SIDDHARTH PVT LTD, JAIPUR",
    description:
      "I specialize in seamless internal and external communication, efficient sampling, and expertly handling international clients. My skills also include optimizing production processes, overseeing accessories and trims, and managing purchase orders for streamlined operations.",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2018",
  },
  {
    title: "Software Developer Engineer",
    location: "Softobiz Technology PVT LTD, Mohali, Punjab",
    description:
      "I am currently working here as a full stack developer. I'm experienced in using Postman for API testing and follow Agile methodologies, with a focus on the SCRUM framework. Additionally, I've successfully implemented Stripe Payment Method and integrated AWS services into various projects.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Recipe Book",
    description:
      "It is a personal project that. This user-friendly app allows users to browse and save their favorite recipes, with intuitive design and functionality.",
    tags: ["Angular.js", "TypeScript", "HTML & CSS"],
    imageUrl: recipeImg,
  },
  {
    title: "Ecommerce App Backend",
    description:
      "The present application is a fully operational backend ecommerce system developed using the Node.js framework.",
    tags: ["Node.js", "Express.js", "mysql"],
    imageUrl: ecomImg,
  },
  {
    title: "Fab Fusion",
    description:
      "Built with Next.js and React, offering users a visually appealing and seamless shopping experience. With a user-friendly interface, secure authentication, and dynamic product catalog.",
    tags: ["Next.js", "Typescript", "Tailwind"],
    imageUrl: fabfusionImg,
  },
] as const;

export const skillsData = [
  "HTML & CSS",
  "JavaScript",
  "TypeScript",
  "Angular",
  "React.js",
  "Nest.js",
  "Node.js",
  "Express.js",
  "Git & Github",
  "MongoDB",
  "Problem Solving",
  "Project Management Tools",
  "Strong Communication",
] as const;
