// CV file:
import CV from "../../assets/text/cv.docx";

const CallToAction = () => {
  return (
    <div className="call-to-action">
      <a href={CV} className="btn" download>Download CV</a>
      <a href="#contact" className="btn btn-primary">Contact me</a>
    </div>
  );
};

export default CallToAction;