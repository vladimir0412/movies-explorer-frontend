import './Portfolio.css';
import arrow from '../../images/arrow.svg';

function Portfolio() {
  return (
    <section className="portfolio">
      <p className="portfolio__title">Портфолио</p>
      <div className="portfolio__link">
        <p className="portfolio__link-name">Статичный сайт</p>
        <a className="portfolio__link-arrow" href="#">
          <img className="portfolio__link-image" src={arrow} alt="стрелка"/>
        </a>
      </div>
      <div className="portfolio__line"></div>
      <div className="portfolio__link">
        <p className="portfolio__link-name">Адаптивный сайт</p>
        <a className="portfolio__link-arrow" href="#">
          <img className="portfolio__link-image" src={arrow} alt="стрелка"/>
        </a>
      </div>
      <div className="portfolio__line"></div>
      <div className="portfolio__link">
        <p className="portfolio__link-name">Одностраничное приложение</p>
        <a className="portfolio__link-arrow" href="#">
          <img className="portfolio__link-image" src={arrow} alt="стрелка"/>
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
