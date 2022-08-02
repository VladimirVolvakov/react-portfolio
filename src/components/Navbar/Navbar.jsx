// Styles:
import "./Navbar.css";
// Icons:
import { AiOutlineHome, AiOutlineFolder, AiOutlineMessage, AiOutlineUser } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
// Hook:
import { useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#");

  return (
    <nav>
      <a 
        href="#" 
        onClick={() => setActiveLink("#")}
        className={activeLink === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a 
        href="#about" 
        onClick={() => setActiveLink("#about")} 
        className={activeLink === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a 
        href="#experience" 
        onClick={() => setActiveLink("#experience")} 
        className={activeLink === "#experience" ? "active" : ""}
      >
        <BsBook />
      </a>
      <a 
        href="#portfolio"
        onClick={() => setActiveLink("#portfolio")}
        className={activeLink === "#portfolio" ? "active" : ""}
      >
        <AiOutlineFolder />
      </a>
      <a 
        href="#contact"
        onClick={() => setActiveLink("#contact")}
        className={activeLink === "#contact" ? "active" : ""}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default Navbar;