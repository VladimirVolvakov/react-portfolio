// Icons:
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const HeaderSocialMedia = () => {
  return (
    <div className="header__socialmedia">
      <a href="https://linkedin.com" rel="noreferrer" target="_blank"><BsLinkedin /></a>
      <a href="http://github.com" rel="noreferrer" target="_blank"><BsGithub /></a>
      <a href="https://twitter.com" rel="noreferrer" target="_blank"><BsTwitter /></a>
    </div>
  );
};

export default HeaderSocialMedia;