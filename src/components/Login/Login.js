import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import logo from '../../images/logo.svg';
import './Login.css';
import '../Register/Register.css'

function Login({ onSubmit }) {

  const { register, formState: { errors, isValid }, reset, handleSubmit } = useForm({mode: 'onBlur'});

  const submitForm = (data) => {
    onSubmit(data);
    reset();
  }

  return (
    <section className="register">
      <Link to='/'>
        <img  className="register__logo" src={logo} alt="лого"/>
      </Link>
      <h1 className="register__title">Рады видеть!</h1>
      <form className="register__form login__form" onSubmit={handleSubmit(submitForm)}>
        <div className="register__group">
          <label className="register__form-label" for="email">E-mail</label>
          <input id="email" className="register__form-input" type="email"
            {...register('email', {required: true, pattern: /([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})/})} />
          <span className="register__form-input-error">
            {errors.email?.type === "required" && "Поле необходимо заполнить"}
            {errors.email?.type === "pattern" && "Недопустимые символы"}
          </span>
        </div>
        <div className="register__group">
          <label className="register__form-label" for="password">Пароль</label>
          <input id="password" className="register__form-input register__form-input_red" type="password"
           {...register('password', {required: true})} />
          <span className="register__form-input-error">
          {errors?.password?.type === "required" && "Поле необходимо заполнить"}
          </span>
        </div>
        <div className="register__submit-group login__submit">
          <button className={"register__submit-button" + (!isValid?" register__submit-button_inactive" : "")} type="submit" disabled={!isValid}>Войти</button>
        </div>
      </form>
      <div className="register__singin">
        <p className="register__singin-text">Ещё не зарегистрированы?</p>
        <Link className="register__singin-link" to="signup">Регистрация</Link>
      </div>
    </section>
  );
}

export default Login;
