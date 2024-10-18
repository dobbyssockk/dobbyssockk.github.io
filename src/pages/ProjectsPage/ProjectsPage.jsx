import { StyledPage, StyledList } from './ProjectsPage.styles';
import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';
import Divider from '../../components/Divider/Divider';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import greenery from '../../assets/greenery.png';
import crypto from '../../assets/crypto-market.png';
import alchemy from '../../assets/alchemy-game.png';
import marvel from '../../assets/marvel.png';
import runsmart from '../../assets/runsmart.png';
import employees from '../../assets/employees-management.png';
import snake from '../../assets/snake-game.png';
import memory from '../../assets/memory-game.png';
import ticTacToe from '../../assets/tic-tac-toe.svg';

const myProjects = [
    { id: 1, src: greenery, link: "https://dobbyssockk.github.io/organic-origins/", title: "Organic Origins", description: "an online store celebrating the organic lifestyle, built with HTML5, CSS3, and JavaScript for an adaptive, user-friendly experience.", tech: "JS, HTML, CSS" },
    { id: 2, src: crypto, link: "https://dobbyssockk.github.io/crypto-market-frontend/", title: "Crypto Market", description: "a dynamic cryptocurrency dashboard built using React and advanced state management.", tech: "React" },
    { id: 3, src: alchemy, link: "https://dobbyssockk.github.io/alchemy-game/", title: "Alchemy Game", description: "an interesting game engaging in the art of element combination, powered by JavaScript for seamless gameplay.", tech: "JS, HTML, CSS" },
    { id: 4, src: marvel, link: "https://dobbyssockk.github.io/marvelDB/", title: "Marvel Database", description: "an interactive portal for exploring Marvel characters and comics, featuring React-based dynamic data fetching and visualization.", tech: "React" },
    { id: 5, src: runsmart, link: "https://dobbyssockk.github.io/runsmart/", title: "RunSmart", description: "an online fitness store integrating advanced CSS animations and JavaScript to engage users with interactive elements.", tech: "JS, HTML, CSS" },
    { id: 6, src: employees, link: "https://dobbyssockk.github.io/employees-management/", title: "Employees Management", description: "an employee management dashboard with dynamic search and filter functionality, built using React.", tech: "React" },
    { id: 7, src: snake, link: "https://dobbyssockk.github.io/snake-game/", title: "Snake Game", description: "a classic snake game built using JavaScript logic.", tech: "JS, HTML, CSS" },
    { id: 8, src: memory, link: "https://dobbyssockk.github.io/memory-game/", title: "Memory Game", description: "an interactive game to boost memory skills, built with JavaScript logic.", tech: "JS, HTML, CSS" },
    { id: 9, src: ticTacToe, link: "https://dobbyssockk.github.io/tic-tac-toe/", title: "Tic Tac Toe", description: "a minimalist game, perfect for quick, engaging play.", tech: "JS, HTML, CSS" }
];
  

const ProjectsPage = () => (
    <StyledPage className="section-container">
        <Title center>Portfolio</Title>
        <Subtitle center>My projects</Subtitle>
        <Divider center />
        <StyledList>
            {myProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </StyledList>
    </StyledPage>
);

export default ProjectsPage;