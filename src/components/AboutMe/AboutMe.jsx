import { StyledAbout } from "./AboutMe.styles";
import img from "../../assets/main_photo.png";
import Title from "../Title/Title";
import Subtitle from "../Subtitle/Subtitle";
import Divider from "../Divider/Divider";

const AboutMe = () => (
  <StyledAbout>
    <div className="wrapper">
      <div className="photo">
        <img src={img} alt="developer in front of a computer" />
      </div>

      <div className="descr">
        <Title padding>About me</Title>
        <Subtitle>My name is Lily</Subtitle>
        <Divider />
        <p className="text">
          <strong>Date of Birth:</strong> January 28, 2004
        </p>
        <p className="text">
          <strong>Location:</strong> Yerevan, Armenia
        </p>
        <p className="text">
          <strong>Languages:</strong>
        </p>
        <ul>
          <li className="text">Armenian (Native)</li>
          <li className="text">English (Intermediate)</li>
          <li className="text">Russian (Native)</li>
        </ul>
      </div>
    </div>
  </StyledAbout>
);

export default AboutMe;
