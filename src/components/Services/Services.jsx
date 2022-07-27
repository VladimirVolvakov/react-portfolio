// Styles:
import "./Services.css";
// Icon:
import { AiOutlineCheck } from "react-icons/ai";

const Services = () => {
  return (
    <section id="service">
      <h5>My Offer</h5>
      <h2>Services</h2>

      <div className="container service__container">
        <article className="service">
          <div className="service__heading">
            <h3>UI / UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__heading">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__heading">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;