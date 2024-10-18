import { StyledCard } from "./SkillCard.styles";

const SkillCard = ({ skill }) => (
    <StyledCard>
        <div>
            <img src={skill.src} alt={skill.title} />
        </div>
        <h3>{skill.title}</h3>
        <p>{skill.description}</p>
    </StyledCard>
);

export default SkillCard;