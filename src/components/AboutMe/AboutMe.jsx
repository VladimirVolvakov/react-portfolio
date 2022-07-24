// Styles:
import "./AboutMe.css";
// Image:
import MyPhoto from "../../assets/images/me-about.jpg";
// Icons:
import { BsAward } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { TbFolders } from "react-icons/tb";

const AboutMe = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me--image">
            <img src={MyPhoto} alt="About me picture" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAward className="about__icon" />
              <h5>Working Experience</h5>
              <small>2 Years</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>30+ Clients</small>
            </article>
            <article className="about__card">
              <TbFolders className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Complete Projects</small>
            </article>
          </div>

          <p>
            My name is Volodymyr. I'm 36 years old. For the last couple of years I work as frontend web developer.
            My previous entire professional career has been associated with taking care about people problems, workflow management, 
            teamwork and teaching other people in my specialty. This experience of work was a great school for building my soft skills.
          </p>
          <p>
            I'm very fond of web development cause it makes me feel my ability of creating something new. This is a profession that holds the 
            future and it provides great possibilities for my personal and professional growth. My love and ability to learn and gain new 
            knowledge and new skills, my life experience, my soft skills are leading me through the path of becoming a successful web 
            developer. The ability to work as a web developer from any place of the world gives me an additional portion of inspiration.
          </p>

          <a href="#contact" className="btn btn-primary">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;