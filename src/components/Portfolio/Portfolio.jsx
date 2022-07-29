// Styles:
import "./Portfolio.css";
// Images:
import ReactMovieDatabaseImage from "../../assets/images/pf-4-movie-database.png";
import ReactRealEstateMarketplace from "../../assets/images/pf-3-real-estate-marketplace.png";
import PhotoBootcamp from "../../assets/images/pf-2-photo-bootcamp.png";
import ReactWeatherApp from "../../assets/images/pf-1-weather-app.png";


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item--image">
            <img src={ReactRealEstateMarketplace} alt="React Real Estate Marketplace" />
          </div>
          <h3 className="portfolio__item--heading">Real Estate Marketplace App</h3>
          <div className="portfolio__item--call-to-action">
            <a className="btn" href="https://github.com/VladimirVolvakov/real-estate-marketplace" target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn btn-primary" href="https://real-estate-market-pi.vercel.app/" target="_blank" rel="noreferrer">Watch Live</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item--image">
            <img src={ReactMovieDatabaseImage} alt="React Movie Database" />
          </div>
          <h3 className="portfolio__item--heading">Movie Database App</h3>
          <div className="portfolio__item--call-to-action">
            <a className="btn" href="https://github.com/VladimirVolvakov/react-movie-database" target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn btn-primary" href="https://melodious-torrone-14d58e.netlify.app/" target="_blank" rel="noreferrer">Watch Live</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item--image">
            <img src={PhotoBootcamp} alt="Photo Bootcamp" />
          </div>
          <h3 className="portfolio__item--heading">Photo Bootcamp Website</h3>
          <div className="portfolio__item--call-to-action">
            <a className="btn" href="https://github.com/VladimirVolvakov/photo-bootcamp" target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn btn-primary" href="https://photo-bootcamp.vercel.app/" target="_blank" rel="noreferrer">Watch Live</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item--image">
            <img src={ReactWeatherApp} alt="React Weather Application" />
          </div>
          <h3 className="portfolio__item--heading">React Weather App</h3>
          <div className="portfolio__item--call-to-action">
            <a className="btn" href="https://github.com/VladimirVolvakov/weather-app" target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn btn-primary" href="https://weather-app-eta-five.vercel.app/" target="_blank" rel="noreferrer">Watch Live</a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;