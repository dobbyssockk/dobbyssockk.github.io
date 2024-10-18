import { StyledResume } from "./Experience.styles";
import Title from "../Title/Title";
import Subtitle from "../Subtitle/Subtitle";
import Divider from "../Divider/Divider";
import university from "../../assets/university.svg";
import courses from "../../assets/courses.svg";
import projects from "../../assets/projects.svg";
import learning from "../../assets/learning.svg";
import ResumeColumn from "../ResumeColumn/ResumeColumn";

const educationItems = [
    {
        icon: university,
        alt: "university",
        title: "Bachelor's Degree",
        location: "Computer Science | Yerevan (2022-Present)",
        description:
        "The Bachelor's program covers concepts of programming and software development.",
    },
    {
        icon: courses,
        alt: "courses",
        title: "Udemy",
        location: "Web Development Courses",
        description:
        "Successfully completed an intensive course covering all aspects of web development with hands-on experience.",
    },
];

const experienceItems = [
    {
        icon: projects,
        alt: "developer",
        title: "Projects and Practical Experience",
        location: "Personal Projects",
        description:
        "Built multiple websites using JavaScript, HTML5, CSS3, React and browser games focusing on JavaScript logic.",
    },
    {
        icon: learning,
        alt: "developer",
        title: "Projects and Practical Experience",
        location: "Continuous Learning",
        description:
        "Actively learning new web technologies and frameworks through online platforms like Udemy.",
    },
];

const Experience = () => (
    <section className="section-container">
        <Title center>Experience</Title>
        <Subtitle center>How I will be useful</Subtitle>
        <Divider center />
        <StyledResume>
            <ResumeColumn title="Education" items={educationItems} />
            <ResumeColumn title="Experience" items={experienceItems} />
        </StyledResume>
    </section>
);

export default Experience;