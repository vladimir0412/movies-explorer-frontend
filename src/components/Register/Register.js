import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Register.css';

function Register() {
  return (
    <section className="register">
      <Link to='/'>
        <img  className="register__logo" src={logo} alt="лого"/>
      </Link>
      <h1 className="register__title">Добро пожаловать!</h1>
      <form className="register__form">
        <div className="register__group">
          <label className="register__form-label" for="name">Имя</label>
          <input id="name" className="register__form-input" type="text" name="name" minLength="2" maxLength="30" required value="Владимир"/>
          <span className="register__form-input-error"></span>
        </div>
        <div className="register__group">
          <label className="register__form-label" for="email">E-mail</label>
          <input id="email" className="register__form-input" type="email" name="email" required value="pochta@yandex.ru"/>
          <span className="register__form-input-error">Что-то пошло не так...</span>
        </div>
        <div className="register__group">
          <label className="register__form-label" for="password">Пароль</label>
          <input id="password" className="register__form-input register__form-input_red" type="password" name="password" required value="Владимир"/>
          <span className="register__form-input-error">Что-то пошло не так...</span>
        </div>
      </form>
      <button className="register__submit-button" type="submit">Зарегистрироваться</button>
      <div className="register__singin">
        <p className="register__singin-text">Уже зарегистрированы?</p>
        <Link className="register__singin-link" to="signin">Войти</Link>
      </div>
    </section>
  );
}

export default Register;
