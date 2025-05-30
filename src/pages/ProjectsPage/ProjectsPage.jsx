import {
  StyledSection,
  StyledCategory,
  StyledList,
} from "./ProjectsPage.styles";
import Title from "../../components/Title/Title";
import Subtitle from "../../components/Subtitle/Subtitle";
import Divider from "../../components/Divider/Divider";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import organic from "../../assets/organic.png";
import crypto from "../../assets/crypto-market.png";
import alchemy from "../../assets/alchemy-game.png";
import snake from "../../assets/snake-game.png";
import memory from "../../assets/memory-game.png";
import ticTacToe from "../../assets/tic-tac-toe.png";
import natours from "../../assets/natours.png";
import trillo from "../../assets/trillo.png";
import nexter from "../../assets/nexter.png";
import tutorAi from "../../assets/tutor-ai.png";

const categories = [
  "React Applications",
  "Vanilla JS Web Apps",
  "Browser Games (Vanilla JS)",
  "Course projects: Advanced CSS and Sass",
];

const myProjects = [
  {
    id: 1,
    src: organic,
    link: "https://dobbyssockk.github.io/organic-origins/",
    repo: "https://github.com/dobbyssockk/organic-origins",
    title: "Organic Origins",
    description:
      "a concept landing page for an organic store, featuring shopping basket logic, animated interactions, and local storage — built with HTML, CSS, and JS.",
    category: "Vanilla JS Web Apps",
  },
  {
    id: 2,
    src: crypto,
    repo: "https://github.com/dobbyssockk/crypto-market-frontend",
    title: "Crypto Market",
    description:
      "a React-based dashboard that fetches real-time crypto data with charting and favorites — connected to a custom Node.js backend.",
    category: "React Applications",
  },
  {
    id: 3,
    src: alchemy,
    link: "https://dobbyssockk.github.io/alchemy-game/",
    repo: "https://github.com/dobbyssockk/alchemy-game",
    title: "Alchemy Game",
    description:
      "a minimalistic game where players combine elements to discover new ones — logic-driven and responsive, built with vanilla JS.",
    category: "Browser Games (Vanilla JS)",
  },
  {
    id: 4,
    src: snake,
    link: "https://dobbyssockk.github.io/snake-game/",
    repo: "https://github.com/dobbyssockk/snake-game",
    title: "Snake Game",
    description:
      "a smooth remake of the classic Snake game with score tracking and keyboard input — built from scratch with JS.",
    category: "Browser Games (Vanilla JS)",
  },
  {
    id: 5,
    src: memory,
    link: "https://dobbyssockk.github.io/memory-game/",
    repo: "https://github.com/dobbyssockk/memory-game",
    title: "Memory Game",
    description:
      "a themed memory card game with sound effects, custom cursors, and responsive layout — built using plain JavaScript.",
    category: "Browser Games (Vanilla JS)",
  },
  {
    id: 6,
    src: ticTacToe,
    link: "https://dobbyssockk.github.io/tic-tac-toe/",
    repo: "https://github.com/dobbyssockk/tic-tac-toe",
    title: "Tic Tac Toe",
    description:
      "a clean and responsive implementation of the classic game — two-player logic built using HTML, CSS, and JS.",
    category: "Browser Games (Vanilla JS)",
  },
  {
    id: 7,
    src: natours,
    link: "https://dobbyssockk.github.io/natours/",
    repo: "https://github.com/dobbyssockk/natours",
    title: "Natours",
    description:
      "a landing page built using an old layout approach with floats, enhanced with advanced CSS techniques and smooth animations.",
    category: "Course projects: Advanced CSS and Sass",
  },
  {
    id: 8,
    src: trillo,
    link: "https://dobbyssockk.github.io/trillo/",
    repo: "https://github.com/dobbyssockk/trillo",
    title: "Trillo",
    description:
      "a modern layout built with CSS Flexbox, featuring clean structure, advanced styling, and subtle animations.",
    category: "Course projects: Advanced CSS and Sass",
  },
  {
    id: 9,
    src: nexter,
    link: "https://dobbyssockk.github.io/nexter/",
    repo: "https://github.com/dobbyssockk/nexter",
    title: "Nexter",
    description:
      "a modern real estate landing page using CSS Grid layout techniques.",
    category: "Course projects: Advanced CSS and Sass",
  },
  {
    id: 10,
    src: tutorAi,
    repo: "https://github.com/dobbyssockk/tutor-ai-fe",
    title: "Tutor AI",
    description:
      "a guided AI chatbot built with React, TypeScript and Node.js — helps users solve problems step by step using GPT hints and auth-protected chat history.",
    category: "React Applications",
  },
];

const ProjectsPage = () => (
  <section className="section-container pd-btm">
    <Title center>Portfolio</Title>
    <Subtitle center>My projects</Subtitle>
    <Divider center />
    {categories.map((category) => (
      <StyledSection key={category}>
        <StyledCategory>{category}</StyledCategory>
        <StyledList>
          {myProjects
            .filter((item) => item.category === category)
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </StyledList>
      </StyledSection>
    ))}
  </section>
);

export default ProjectsPage;
