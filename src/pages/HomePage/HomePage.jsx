import { StyledPage } from './HomePage.styles';
import AboutMe from '../../components/AboutMe/AboutMe';
import Skills from '../../components/Skills/Skills';
import Experience from '../../components/Experience/Experience';

const HomePage = () => (
    <StyledPage className="section-container">
        <AboutMe />
        <Skills />
        <Experience />
    </StyledPage>
);

export default HomePage;