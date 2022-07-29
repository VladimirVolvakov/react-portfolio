// Styles:
import "./Testimonials.css";
// Images:
import ClientPicture1 from "../../assets/images/avatar1.jpg";
import ClientPicture2 from "../../assets/images/avatar2.jpg";
import ClientPicture3 from "../../assets/images/avatar3.jpg";
import ClientPicture4 from "../../assets/images/avatar4.jpg";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonials__item">
          <div className="testimonials__item--client-photo">
            <img src={ClientPicture1} alt="My Client's avatar" />
            <h5 className="testimonials__item--client-name">Person Name</h5>
            <small className="testimonials__item--review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aut iure maiores deserunt, iusto odit molestias aliquam quod quisquam voluptatibus culpa pariatur animi porro iste? Aperiam ad ut dolores sunt!</small>
          </div>
        </article>
        <article className="testimonials__item">
          <div className="testimonials__item--client-photo">
            <img src={ClientPicture2} alt="My Client's avatar" />
            <h5 className="testimonials__item--client-name">Person Name</h5>
            <small className="testimonials__item--review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aut iure maiores deserunt, iusto odit molestias aliquam quod quisquam voluptatibus culpa pariatur animi porro iste? Aperiam ad ut dolores sunt!</small>
          </div>
        </article>
        <article className="testimonials__item">
          <div className="testimonials__item--client-photo">
            <img src={ClientPicture3} alt="My Client's avatar" />
            <h5 className="testimonials__item--client-name">Person Name</h5>
            <small className="testimonials__item--review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aut iure maiores deserunt, iusto odit molestias aliquam quod quisquam voluptatibus culpa pariatur animi porro iste? Aperiam ad ut dolores sunt!</small>
          </div>
        </article>
        <article className="testimonials__item">
          <div className="testimonials__item--client-photo">
            <img src={ClientPicture4} alt="My Client's avatar" />
            <h5 className="testimonials__item--client-name">Person Name</h5>
            <small className="testimonials__item--review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aut iure maiores deserunt, iusto odit molestias aliquam quod quisquam voluptatibus culpa pariatur animi porro iste? Aperiam ad ut dolores sunt!</small>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;