// Styles:
import "./Experience.css";
// Icon:
import { AiOutlineCheckCircle } from "react-icons/ai";

const Experience = () => {
  return (
    <section id="experience">
      <h5>My Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiOutlineCheckCircle />
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <AiOutlineCheckCircle />
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <AiOutlineCheckCircle />
              <h4>JavaScript</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <AiOutlineCheckCircle />
              <h4>Bootstrap</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <AiOutlineCheckCircle />
              <h4>Tailwind</h4>
              <small className="text-light">Beginner</small>
            </article>
            <article className="experience__details">
              <AiOutlineCheckCircle />
              <h4>React</h4>
              <small className="text-light">Intermediate</small>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiOutlineCheckCircle />
              <h4>Node JS</h4>
              <small className="text-light">Beginner</small>
            </article>
            <article className="experience__details">
              <AiOutlineCheckCircle />
              <h4>Express JS</h4>
              <small className="text-light">Beginner</small>
            </article>
            <article className="experience__details">
              <AiOutlineCheckCircle />
              <h4>MongoDB</h4>
              <small className="text-light">Beginner</small>
            </article>
            <article className="experience__details">
              <AiOutlineCheckCircle />
              <h4>Firebase</h4>
              <small className="text-light">Beginner</small>
            </article>
            <article className="experience__details">
              <AiOutlineCheckCircle />
              <h4>MySQL</h4>
              <small className="text-light">Beginner</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
