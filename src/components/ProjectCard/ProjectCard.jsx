import { StyledCard } from "./ProjectCard.styles";
import ImageWithSkeleton from "../ImageWithSkeleton";
import github from "../../assets/github-white.svg";

const ProjectCard = ({ project }) => (
  <StyledCard>
    <ImageWithSkeleton
      src={project.src}
      alt={project.title + " Project Image"}
      className="card-img"
    />
    <div className="overlay">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {project.note ? <p className="note">{project.note}</p> : null}
      <p className="tech-line">─── {project.tech} ───</p>
      <a
        href={project.link ? project.link : project.repo}
        rel="noreferrer"
        target="_blank"
        className="project-link"
      >
        Go to project
      </a>
      <a href={project.repo} target="_blank" rel="noopener noreferrer">
        <img src={github} alt="GitHub icon" className="github-icon" />
      </a>
    </div>
  </StyledCard>
);

export default ProjectCard;
