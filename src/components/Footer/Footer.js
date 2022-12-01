import './Footer.css';
import { useLocation } from 'react-router-dom';

function Footer() {

  const location = useLocation();

  return (
    <footer className={'footer' + (location.pathname === "/signin" ? " footer_none" : "") +
      (location.pathname === "/signup" ? " footer_none" : "") +
      (location.pathname === "/profile" ? " footer_none" : "")}>
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__line"></div>
      <div className="footer__nav">
        <p className="footer__date">© {new Date().getFullYear()}</p>
        <div className="footer__links">
          <a className="footer__link" href="https://practicum.yandex.ru/">Яндекс.Практикум</a>
          <a className="footer__link" href="https://github.com/vladimir0412">Github</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
