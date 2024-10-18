import { StyledColumn, StyledItem } from "./ResumeColumn.styles";

const ResumeColumn = ({ title, items }) => (
  <StyledColumn>
    <h3>{title}</h3>
    <ul>
        {items.map((item, index) => (
            <StyledItem key={index}>
                <div className="wrapper">
                    <div className="info">
                        <div className="image">
                            <img src={item.icon} alt={item.alt} />
                        </div>
                        <h4>{item.title}</h4>
                        <div className="subtitle">{item.location}</div>
                    </div>
                </div>
                <p>{item.description}</p>
            </StyledItem>
        ))}
    </ul>
  </StyledColumn>
);

export default ResumeColumn;