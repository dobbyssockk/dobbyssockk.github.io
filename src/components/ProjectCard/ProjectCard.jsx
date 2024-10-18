import { StyledCard } from "./ProjectCard.styles";

const ProjectCard = ({ project }) => (
    <StyledCard>
        <img src={project.src} alt={project.title + " Project Image"} />
        <div className="overlay">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="tech-line">─── {project.tech} ───</p>
            <a href={project.link} rel="noreferrer" target="_blank">Go to project</a>
        </div>
    </StyledCard>
);

export default ProjectCard;