import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project">
      <p className="about-project__title">О проекте</p>
      <div className="about-project__line"></div>
      <div className="about-project__blocks">
        <div className="about-project__block">
          <p className="about-project__subtitle">Дипломный проект включал 5 этапов</p>
          <p className="about-project__text">Составление плана, работу над бэкендом,
            вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__block">
          <p className="about-project__subtitle">На выполнение диплома ушло 5 недель</p>
          <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн,
            которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about-project__rectangles">
        <div className="about-project__rectangles-line">
          <p className="about-project__rectangle-green">1 неделя</p>
          <p className="about-project__rectangle-grey">4 недели</p>
        </div>
        <div className="about-project__rectangles-line">
          <p className="about-project__rectangle-left">Back-end</p>
          <p className="about-project__rectangle-right">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
