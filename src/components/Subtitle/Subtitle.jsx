import { StyledSubtitle } from "./Subtitle.styles";

const Subtitle = ({children, center}) => (
    <StyledSubtitle center={center}>{children}</StyledSubtitle>
);

export default Subtitle;