import { StyledList } from "./Skills.styles";
import Title from "../Title/Title";
import Subtitle from "../Subtitle/Subtitle";
import Divider from "../Divider/Divider";
import SkillCard from "../SkillCard/SkillCard";
import html from '../../assets/html5.svg';
import css from '../../assets/css3.svg';
import js from '../../assets/js.svg';
import jquery from '../../assets/jquery.svg';
import react from '../../assets/react.svg';

const mySkills = [
    {id: 1, src: html, title: "HTML5", description: "This is what creates the structure of your site or app, and version 5 will allow me to create a more SEO-friendly structure for your product."},
    {id: 2, src: css, title: "CSS3", description: "This style language allows me to create absolutely any appearance for your website or application. Everything is limited only by your imagination!"},
    {id: 3, src: js, title: "JavaScript", description: "This programming language enables the animation of anything you want: sliders, windows, tooltips, tabs, retrieving data from the server, and much more."},
    {id: 4, src: jquery, title: "Jquery", description: "The Jquery library will help speed up development. We won't integrate it into the project without necessity, but the skill to work with it is present."},
    {id: 5, src: react, title: "React", description: "This library allows the creation of web applications. We can create a highly interactive product specifically tailored to your goals."},
];

const Skills = () => (
    <section className="section-container">
        <Title center>Skills</Title>
        <Subtitle center>What do I use at work</Subtitle>
        <Divider center />
        <StyledList>
            {mySkills.map((skill) => <SkillCard key={skill.id} skill={skill} />)}
        </StyledList>
    </section>
);

export default Skills;