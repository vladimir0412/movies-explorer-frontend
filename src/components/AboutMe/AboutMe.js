import './AboutMe.css';
import photo from '../../images/photo.jpg';

function AboutMe() {
  return (
    <section className="about-me">
      <p className="about-me__title">Студент</p>
      <div className="about-me__line"></div>
      <div className="about-me__info">
        <div className="about-me__text">
          <p className="about-me__name">Владимир</p>
          <p className="about-me__profession">Фронтенд-разработчик, 34 года</p>
          <p className="about-me__presintation">Я родился в Иркутске, сейчас живу в Москве.
            Имею высшее техническое образование. Имею около 6 лет опыта работы в области
            Медицинского оборудования. В 2022 году закончил курс "Веб-разработчик" от Яндекс Практикум.</p>
          <a className="about-me__link" href="https://github.com/vladimir0412">Github</a>
        </div>
        <img className="about-me__photo" src={photo} alt="фотография" />
      </div>
    </section>
  );
}

export default AboutMe;
