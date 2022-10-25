import mainLogo from '../../images/logo-main.png';
import './Promo.css';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__logo" style={{ backgroundImage:`url(${mainLogo})` }} alt="Лого"></div>
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
    </section>
  );
}

export default Promo;
