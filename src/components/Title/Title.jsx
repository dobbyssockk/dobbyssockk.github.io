import { StyledTitle } from "./Title.styles";

const Title = ({children, center, padding}) => (
    <StyledTitle center={center} padding ={padding}>{children}</StyledTitle>
);

export default Title;