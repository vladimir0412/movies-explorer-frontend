import './Techs.css';

function Techs() {
  return (
    <section className="techs">
      <p className="techs__title">Технологии</p>
      <div className="techs__line"></div>
      <p className="techs__info">7 технологий</p>
      <p className="techs__text">На курсе веб-разработки мы освоили технологии,
        которые применили в дипломном проекте.</p>
      <div className="techs__items">
        <div className="techs__item">
          <p className="techs__item-name">HTML</p>
        </div>
        <div className="techs__item">
          <p className="techs__item-name">CSS</p>
        </div>
        <div className="techs__item">
          <p className="techs__item-name">JS</p>
        </div>
        <div className="techs__item">
          <p className="techs__item-name">React</p>
        </div>
        <div className="techs__item">
          <p className="techs__item-name">Git</p>
        </div>
        <div className="techs__item">
          <p className="techs__item-name">Express.js</p>
        </div>
        <div className="techs__item">
          <p className="techs__item-name">mongoDB</p>
        </div>
      </div>
    </section>
  );
}

export default Techs;
