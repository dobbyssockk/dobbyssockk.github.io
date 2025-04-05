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
import marvel from "../../assets/marvel.png";
import runsmart from "../../assets/runsmart.png";
import snake from "../../assets/snake-game.png";
import memory from "../../assets/memory-game.png";
import ticTacToe from "../../assets/tic-tac-toe.png";
import natours from "../../assets/natours.png";
import trillo from "../../assets/trillo.png";
import nexter from "../../assets/nexter.png";

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
      "an online store celebrating the organic lifestyle, built with HTML5, CSS3, and JavaScript for an adaptive, user-friendly experience.",
    tech: "JS, HTML, CSS",
    category: "Vanilla JS Web Apps",
  },
  {
    id: 2,
    src: crypto,
    repo: "https://github.com/dobbyssockk/crypto-market-frontend",
    title: "Crypto Market",
    description:
      "a dynamic cryptocurrency dashboard built using React and advanced state management.",
    note: "Note that candlestick charts (shown when clicking on a cryptocurrency) won't work without the backend.",
    tech: "React",
    category: "React Applications",
  },
  {
    id: 3,
    src: marvel,
    link: "https://dobbyssockk.github.io/marvelDB/",
    repo: "https://github.com/dobbyssockk/marvelDB",
    title: "Marvel Database",
    description:
      "an interactive portal for exploring Marvel characters and comics, featuring React-based dynamic data fetching and visualization.",
    note: "Note that it's not finished yet.",
    tech: "React",
    category: "React Applications",
  },
  {
    id: 4,
    src: runsmart,
    link: "https://dobbyssockk.github.io/runsmart/",
    repo: "https://github.com/dobbyssockk/runsmart",
    title: "RunSmart",
    description:
      "an online fitness store integrating advanced CSS animations and JavaScript to engage users with interactive elements.",
    note: "Note that due to the limitations of GitHub Pages, the mailing service will not function, as it requires server-side processing.",
    tech: "JS, HTML, CSS",
    category: "Vanilla JS Web Apps",
  },
  {
    id: 5,
    src: alchemy,
    link: "https://dobbyssockk.github.io/alchemy-game/",
    repo: "https://github.com/dobbyssockk/alchemy-game",
    title: "Alchemy Game",
    description:
      "an interesting game engaging in the art of element combination, powered by JavaScript for seamless gameplay.",
    tech: "JS, HTML, CSS",
    category: "Browser Games (Vanilla JS)",
  },
  {
    id: 6,
    src: snake,
    link: "https://dobbyssockk.github.io/snake-game/",
    repo: "https://github.com/dobbyssockk/snake-game",
    title: "Snake Game",
    description: "a classic snake game built using JavaScript logic.",
    tech: "JS, HTML, CSS",
    category: "Browser Games (Vanilla JS)",
  },
  {
    id: 7,
    src: memory,
    link: "https://dobbyssockk.github.io/memory-game/",
    repo: "https://github.com/dobbyssockk/memory-game",
    title: "Memory Game",
    description:
      "an interactive game to boost memory skills, built with JavaScript logic.",
    tech: "JS, HTML, CSS",
    category: "Browser Games (Vanilla JS)",
  },
  {
    id: 8,
    src: ticTacToe,
    link: "https://dobbyssockk.github.io/tic-tac-toe/",
    repo: "https://github.com/dobbyssockk/tic-tac-toe",
    title: "Tic Tac Toe",
    description: "a minimalist game, perfect for quick, engaging play.",
    tech: "JS, HTML, CSS",
    category: "Browser Games (Vanilla JS)",
  },
  {
    id: 9,
    src: natours,
    link: "https://dobbyssockk.github.io/natours/",
    repo: "https://github.com/dobbyssockk/natours",
    title: "Natours",
    description:
      "a landing page built using an old layout approach with floats, enhanced with advanced CSS techniques and smooth animations.",
    tech: "HTML, SASS",
    category: "Course projects: Advanced CSS and Sass",
  },
  {
    id: 10,
    src: trillo,
    link: "https://dobbyssockk.github.io/trillo/",
    repo: "https://github.com/dobbyssockk/trillo",
    title: "Trillo",
    description:
      "a modern layout built with CSS Flexbox, featuring clean structure, advanced styling, and subtle animations.",
    tech: "HTML, SASS",
    category: "Course projects: Advanced CSS and Sass",
  },
  {
    id: 11,
    src: nexter,
    link: "https://dobbyssockk.github.io/nexter/",
    repo: "https://github.com/dobbyssockk/nexter",
    title: "Nexter",
    description:
      "a CSS Grid-based layout project that showcases complex grid structures.",
    tech: "HTML, SASS",
    category: "Course projects: Advanced CSS and Sass",
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
