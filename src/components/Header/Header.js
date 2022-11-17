import { Link, useHistory, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.svg';
import './Header.css';

function Header ({loggedIn, isOpen, onClick, onClose}) {

  const history = useHistory();
  const location = useLocation();

  return (
    <header className={"header" + (location.pathname === "/" ? " header_main":"") +
      (location.pathname === "/signin" ? " header_none" : "") +
      (location.pathname === "/signup" ? " header_none" : "")}>
      <Link to='/'>
        <img  className="header__logo" src={logo} alt="лого"/>
      </Link>
        {loggedIn ? (
          <>
            <Navigation isOpen={isOpen} onClose={onClose} />
            <button className="navigation__burger" type="button" onClick={() => onClick(true)} />
          </>
        ) : (
          <div className = "header__sign">
            <Link to="/signup" className="header__sign-link">Регистрация</Link>
            <button className="header__sign-button" onClick= {() => history.push('./signin')} type="button">Войти</button>
          </div>
        )}
    </header>
  );
}

export default Header;
