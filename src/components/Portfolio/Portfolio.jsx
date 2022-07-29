// Styles:
import "./Portfolio.css";
// Images:
import ReactMovieDatabaseImage from "../../assets/images/movie-database.png";
import ReactRealEstateMarketplaceImage from "../../assets/images/real-estate-marketplace.png";
import PhotoBootcampImage from "../../assets/images/photo-bootcamp.png";
import ReactWeatherAppImage from "../../assets/images/weather-app.png";

const portfolioItems = [
  {
    id: 1,
    image: ReactRealEstateMarketplaceImage,
    title: "Real Estate Market React App",
    githubLink: "https://github.com/VladimirVolvakov/real-estate-marketplace",
    watchLiveLink: "https://real-estate-market-pi.vercel.app/"
  },
  {
    id: 2,
    image: ReactMovieDatabaseImage,
    title: "Movie Database React App",
    githubLink: "https://github.com/VladimirVolvakov/react-movie-database",
    watchLiveLink: "https://melodious-torrone-14d58e.netlify.app/"
  },
  {
    id: 3,
    image: PhotoBootcampImage,
    title: "Photo Bootcamp Landing Page",
    githubLink: "https://github.com/VladimirVolvakov/photo-bootcamp",
    watchLiveLink: "https://photo-bootcamp.vercel.app/"
  },
  {
    id: 4,
    image: ReactWeatherAppImage,
    title: "Weather Forecast React App",
    githubLink: "https://github.com/VladimirVolvakov/weather-app",
    watchLiveLink: "https://weather-app-eta-five.vercel.app/"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        { portfolioItems.map(item => (
          <article className="portfolio__item" key={item.id}>
          <div className="portfolio__item--image">
            <img src={item.image} alt={item.title} />
          </div>
          <h3 className="portfolio__item--heading">{item.title}</h3>
          <div className="portfolio__item--call-to-action">
            <a className="btn" href={item.githubLink} target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn btn-primary" href={item.watchLiveLink} target="_blank" rel="noreferrer">Watch Live</a>
          </div>
        </article>
        )) }
      </div>
    </section>
  );
};

export default Portfolio;