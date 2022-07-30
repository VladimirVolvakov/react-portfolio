// Styles:
import "./Contact.css";
// Icons:
import { AiOutlineMail, AiOutlineMobile, AiOutlineWhatsApp } from "react-icons/ai";
import { FaViber, FaTelegramPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__options--item">
            <AiOutlineMobile className="contact__options--item-icon" />
            <h4>Mobile phone</h4>
            <h5>+38-071-901-77-55</h5>
            <a className="contact__options--item-link" href="tel:+380719017755">Call</a>
          </article>
          <article className="contact__options--item">
            <AiOutlineMail className="contact__options--item-icon" />
            <h4>Email</h4>
            <h5>dr.volvakov@gmail.com</h5>
            <a className="contact__options--item-link" href="mailto:dr.volvakov@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__options--item">
            <AiOutlineWhatsApp className="contact__options--item-icon" />
            <h4>WhatsApp</h4>
            <h5>+38-071-901-77-55</h5>
            <a className="contact__options--item-link" href="https://wa.me/+380719017755?text=urlencodedtext" target="_blank">Send a message</a>
          </article>
          <article className="contact__options--item">
            <FaViber className="contact__options--item-icon" />
            <h4>Viber</h4>
            <h5>+38-050-901-77-55</h5>
            <a className="contact__options--item-link" href="https://msng.link/o/?380719017755=vi" target="_blank">Send a message</a>
          </article>
          <article className="contact__options--item">
            <FaTelegramPlane className="contact__options--item-icon" />
            <h4>Telegram</h4>
            <h5>+38-050-901-77-55</h5>
            <a className="contact__options--item-link" href="https://t.me/VolodymyrVolvakov" target="_blank">Send a message</a>
          </article>
        </div>
        <form>
          <input type="text" name="name" id="name" placeholder="Please enter your name" required />
          <input type="email" name="email" id="email" placeholder="Please enter your email" required />
          <textarea name="message" id="message" rows="5" placeholder="Please type your message here" required></textarea>
          <button className="btn btn-primary contact__form--button" type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;