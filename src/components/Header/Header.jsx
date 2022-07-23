// Components:
import CallToAction from "../CallToAction/CallToAction";
import HeaderSocialMedia from "../HeaderSocialMedia/HeaderSocialMedia";
// Styles:
import "./Header.css";
// Image:
import MyPhoto from "../../assets/images/me.jpg";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello! I'm</h5>
        <h1>Volodymyr Volvakov</h1>
        <h5 className="text-light">Frontend Web Developer</h5>
        <CallToAction />
        <HeaderSocialMedia />

        <div className="my-photo">
          <img src={MyPhoto} alt="Frontend Web Developer Volodymyr Volvakov" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
