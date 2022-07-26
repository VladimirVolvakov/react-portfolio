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
          <h3 className="experience__container--heading">Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiOutlineCheckCircle className="experience__details--icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <AiOutlineCheckCircle className="experience__details--icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <AiOutlineCheckCircle className="experience__details--icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <AiOutlineCheckCircle className="experience__details--icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <AiOutlineCheckCircle className="experience__details--icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <AiOutlineCheckCircle className="experience__details--icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3 className="experience__container--heading">Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiOutlineCheckCircle className="experience__details--icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Beginner</small>
              </div>  
            </article>
            <article className="experience__details">
              <AiOutlineCheckCircle className="experience__details--icon" />
              <div>
                <h4>Express JS</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <AiOutlineCheckCircle className="experience__details--icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <AiOutlineCheckCircle className="experience__details--icon" />
              <div>
                <h4>Firebase</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <AiOutlineCheckCircle className="experience__details--icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
