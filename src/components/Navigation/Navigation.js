import { Link } from 'react-router-dom';
import profileIcon from '../../images/profile-icon.svg';
import './Navigation.css'

function Navigation({isOpen, onClose}) {
  return (
    <section className={"navigation" + (isOpen? " navigation_active":"")}>
      <div className="navigation__container">
        <button className="navigation__close-button" onClick={onClose} type="button" />
        <nav className="navigation__links">
          <Link className="navigation__link" to="/" onClick={onClose}>Главная</Link>
          <Link className="navigation__link" to="/movies" onClick={onClose}>Фильмы</Link>
          <Link className="navigation__link" to="/saved-movies" onClick={onClose}>Сохраненные фильмы</Link>
        </nav>
        <Link className="navigation__profile" to="/profile" onClick={onClose}>
          <p className="navigation__profile-text">Аккаунт</p>
          <div className="navigation__profile-icon">
            <img className="navigation__profile-image" src={profileIcon} alt="Профиль" />
          </div>
        </Link>
      </div>
    </section>
  )
}

export default Navigation;
