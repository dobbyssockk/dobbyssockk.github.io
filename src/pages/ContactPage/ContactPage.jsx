import { StyledPage } from "./ContactPage.styles";
import ImageWithSkeleton from "../../components/ImageWithSkeleton";
import img from "../../assets/main_photo.png";
import github from "../../assets/github.svg";
import Title from "../../components/Title/Title";
import Subtitle from "../../components/Subtitle/Subtitle";
import Divider from "../../components/Divider/Divider";

const ContactPage = () => (
  <StyledPage className="section-container pd-btm">
    <div className="photo">
      <ImageWithSkeleton src={img} alt="developer in front of a computer" />
    </div>

    <div className="descr">
      <Title padding>Contacts</Title>
      <Subtitle>Get in touch with me</Subtitle>

      <Divider />

      <a
        href="https://github.com/dobbyssockk"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={github} alt="GitHub icon" className="github-icon" />
      </a>

      <div className="text">Leave your details and I will write to you:</div>

      <form
        action="https://formspree.io/f/manwrqvz"
        method="POST"
        className="form"
      >
        <div className="input">
          <input name="name" id="name" type="text" required />
          <label for="name">Your name</label>
        </div>
        <div className="input">
          <input name="email" id="email" type="email" required />
          <label for="email">Your email</label>
        </div>

        <div className="textarea">
          <textarea name="message" id="message">
            Hi! Looking forward to your response.
          </textarea>
          <label for="message">Your message</label>
        </div>

        <div className="triggers">
          <button id="formBtn" className="btn" type="submit">
            Send message
          </button>
          <div className="policy">
            <input type="checkbox" required />
            <span>
              I agree to the processing of my data for the purpose of contacting
              me.
            </span>
          </div>
        </div>
      </form>
    </div>
  </StyledPage>
);

export default ContactPage;
