import { StyledButton } from "./Button.styles";

const Button = ({ to, children }) => (
    <StyledButton to={to}>
      {children}
    </StyledButton>
);

export default Button;