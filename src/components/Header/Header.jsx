import { StyledHeader } from './Header.styles';
import Button from '../Button/Button';

const Header = () => (
    <StyledHeader>
        <nav>
            <ul>
                <li><Button to="/">About me</Button></li>
                <li><Button to="/projects">My projects</Button></li>
                <li><Button to="/contacts">Contact me</Button></li>
            </ul>
        </nav>
    </StyledHeader>
);

export default Header;