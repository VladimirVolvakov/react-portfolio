// Icons:
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const HeaderSocialMedia = () => {
  return (
    <div className="header__socialmedia">
      <a href="https://www.linkedin.com/in/vladimir-volvakov-7243411a3/" rel="noreferrer" target="_blank"><BsLinkedin /></a>
      <a href="https://github.com/VladimirVolvakov" rel="noreferrer" target="_blank"><BsGithub /></a>
      <a href="https://twitter.com/VladVolvakov" rel="noreferrer" target="_blank"><BsTwitter /></a>
    </div>
  );
};

export default HeaderSocialMedia;