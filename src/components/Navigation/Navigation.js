import { Link } from 'react-router-dom';
import profileIcon from '../../images/profile-icon.svg';
import './Navigation.css'

function Navigation({isOpen, onClose}) {
  return (
    <section className="navigation">
      <nav className={"navigation__items" + (isOpen? " navigation__items_active":"")}>
        <button className="navigation__close-button" onClick={onClose} type="button" />
        <div className="navigation__links">
          <Link className="navigation__link navigation__link-main" to="/">Главная</Link>
          <Link className="navigation__link" to="/movies">Фильмы</Link>
          <Link className="navigation__link" to="/saved-movies">Сохраненные фильмы</Link>
        </div>
        <Link className="navigation__profile-links" to="/profile">
          <p className="navigation__profile-text">Аккаунт</p>
          <div className="navigation__profile-icon">
            <img className="navigation__profile-image" src={profileIcon} alt="Профиль" />
          </div>
        </Link>
      </nav>
    </section>
  )
}

export default Navigation;
