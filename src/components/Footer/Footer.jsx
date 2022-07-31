// Styles:
import "./Footer.css";
// Icons:
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Volodymyr Volvakov</a>

      <ul className="footer__links">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#experience">My Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>

      <div className="footer__socialmedia">
        <a href="https://www.linkedin.com/in/vladimir-volvakov-7243411a3/" rel="noreferrer" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/VladimirVolvakov" rel="noreferrer" target="_blank"><BsGithub /></a>
        <a href="https://twitter.com/VladVolvakov" rel="noreferrer" target="_blank"><BsTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Volodymyr Volvakov, {new Date().getFullYear()}</small>
      </div>
    </footer>
  );
};

export default Footer;