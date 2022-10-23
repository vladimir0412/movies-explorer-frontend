import { Link } from 'react-scroll';
import './NavTab.css';

function NavTab() {
  return (
    <section className="nav-tab">
      <div className="nav-tab__links">
        <Link to="about-project" smooth={true} duration={500} className="nav-tab__link">О проекте</Link>
        <Link to="techs" smooth={true} duration={500} className="nav-tab__link">Технологии</Link>
        <Link to="about-me" smooth={true} duration={500} className="nav-tab__link">Студент</Link>
      </div>
    </section>
  );
}

export default NavTab;
