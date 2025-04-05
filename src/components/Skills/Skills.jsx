import { StyledList } from "./Skills.styles";
import Title from "../Title/Title";
import Subtitle from "../Subtitle/Subtitle";
import Divider from "../Divider/Divider";
import SkillCard from "../SkillCard/SkillCard";
import html from "../../assets/html5.svg";
import css from "../../assets/css3.svg";
import js from "../../assets/js.svg";
import react from "../../assets/react.svg";
import nodejs from "../../assets/nodejs.svg";
import tailwindcss from "../../assets/tailwindcss.svg";
import sass from "../../assets/sass.svg";
import ai from "../../assets/ai.svg";

const mySkills = [
  {
    id: 1,
    src: html,
    title: "HTML5",
    description:
      "This is what creates the structure of your site or app, and version 5 will allow me to create a more SEO-friendly structure for your product.",
  },
  {
    id: 2,
    src: css,
    title: "CSS3",
    description:
      "This style language allows me to create absolutely any appearance for your website or application. Everything is limited only by your imagination!",
  },
  {
    id: 3,
    src: js,
    title: "JavaScript",
    description:
      "This programming language enables the animation of anything you want: sliders, windows, tooltips, tabs, retrieving data from the server, and much more.",
  },
  {
    id: 4,
    src: react,
    title: "React",
    description:
      "This library allows the creation of web applications. We can create a highly interactive product specifically tailored to your goals.",
  },
  {
    id: 5,
    src: nodejs,
    title: "Node.js",
    description:
      "This JavaScript runtime allows me to build server-side apps — fast, scalable, and great for real-time features.",
  },
  {
    id: 6,
    src: tailwindcss,
    title: "Tailwind CSS",
    description:
      "This utility-first CSS framework allows me to create modern, responsive designs quickly and efficiently.",
  },
  {
    id: 7,
    src: sass,
    title: "Sass",
    description:
      "This CSS preprocessor, with features like variables, nesting, and mixins, makes writing styles more efficient and organized.",
  },
  {
    id: 8,
    src: ai,
    title: "AI Tools",
    description:
      "Actively using ChatGPT, Claude, and other AI tools to boost productivity and solve development challenges. Also experienced in working with the GPT API for AI-powered features.",
  },
];

const Skills = () => (
  <section className="section-container">
    <Title center>Skills</Title>
    <Subtitle center>What do I use at work</Subtitle>
    <Divider center />
    <StyledList>
      {mySkills.map((skill) => (
        <SkillCard key={skill.id} skill={skill} />
      ))}
    </StyledList>
  </section>
);

export default Skills;
