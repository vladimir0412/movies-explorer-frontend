import './Portfolio.css';
import arrow from '../../images/arrow.svg';

function Portfolio() {
  return (
    <section className="portfolio">
      <p className="portfolio__title">Портфолио</p>
      <ul className="portfolio__links">
        <li className="portfolio__link">
          <a className="portfolio__link-name" href="https://vladimir0412.github.io/how-to-learn/" target="blank">Статичный сайт</a>
          <a className="portfolio__link-arrow" href="https://vladimir0412.github.io/how-to-learn/" target="blank">
            <img className="portfolio__link-image" src={arrow} alt="стрелка"/>
          </a>
        </li>
        <div className="portfolio__line"></div>
        <li className="portfolio__link">
          <a className="portfolio__link-name" href="https://vladimir0412.github.io/russian-travel/" target="blank">Адаптивный сайт</a>
          <a className="portfolio__link-arrow" href="https://vladimir0412.github.io/russian-travel/" target="blank">
            <img className="portfolio__link-image" src={arrow} alt="стрелка"/>
          </a>
        </li>
        <div className="portfolio__line"></div>
        <li className="portfolio__link">
          <a className="portfolio__link-name" href="https://pavlovv.students.nomoredomains.sbs/" target="blank">Одностраничное приложение</a>
          <a className="portfolio__link-arrow" href="https://pavlovv.students.nomoredomains.sbs/" target="blank">
            <img className="portfolio__link-image" src={arrow} alt="стрелка"/>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
