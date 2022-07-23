// CV file:
import CV from "../../assets/text/cv.pdf";

const CallToAction = () => {
  return (
    <div className="call-to-action">
      <a href={CV} download>Download CV</a>
      <a href="#contact">Contact me</a>
    </div>
  );
};

export default CallToAction;