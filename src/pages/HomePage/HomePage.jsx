import AboutMe from '../../components/AboutMe/AboutMe';
import Skills from '../../components/Skills/Skills';
import Experience from '../../components/Experience/Experience';

const HomePage = () => (
    <section className="section-container pd-btm">
        <AboutMe />
        <Skills />
        <Experience />
    </section>
);

export default HomePage;