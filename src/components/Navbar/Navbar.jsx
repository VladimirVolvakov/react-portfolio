// Styles:
import "./Navbar.css";
// Icons:
import { AiOutlineHome, AiOutlineFolder, AiOutlineMessage, AiOutlineUser } from "react-icons/ai";
import { BsBook } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome /></a>
      <a href="#about"><AiOutlineUser /></a>
      <a href="#experience"><BsBook /></a>
      <a href="#portfolio"><AiOutlineFolder /></a>
      <a href="#contacts"><AiOutlineMessage /></a>
    </nav>
  );
};

export default Navbar;