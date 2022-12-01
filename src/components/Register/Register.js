import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import logo from '../../images/logo.svg';
import './Register.css';

function Register({ onSubmit, isRegisterError }) {

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
      <h1 className="register__title">Добро пожаловать!</h1>
      <form className="register__form" onSubmit={handleSubmit(submitForm)}>
        <div className="register__group">
          <label className="register__form-label" for="name">Имя</label>
          <input id="name" className="register__form-input" type="text"
            {...register('name', {required: true, minLength: 2, maxLength: 30, pattern: /[a-zA-Zа-яА-Я\-\s]/})} />
          <span className="register__form-input-error">
            {errors.name?.type === "required" && "Поле необходимо заполнить"}
            {errors.name?.type === "pattern" && "Недопустимые символы"}
            {errors.name?.type === "minLength" && "Введенный текст меньше 2-х символов"}
            {errors.name?.type === "maxLength" && "Максимальное количество символов"}
          </span>
        </div>
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
          <input id="password" className="register__form-input register__form-input_red" type="password" name="password" required
            {...register('password', {required: true})} />
          <span className="register__form-input-error">
            {errors?.password?.type === "required" && "Поле необходимо заполнить"}
          </span>
        </div>
        <div className="register__submit-group">
          <span className={"register__submit-error" + (isRegisterError?" register__submit-error_active" : "")}>Поле обязательное к заполнению</span>
          <button className={"register__submit-button" + (!isValid?" register__submit-button_inactive" : "")} type="submit" disabled={!isValid}>Зарегистрироваться</button>
        </div>
      </form>
      <div className="register__singin">
        <p className="register__singin-text">Уже зарегистрированы?</p>
        <Link className="register__singin-link" to="signin">Войти</Link>
      </div>
    </section>
  );
}

export default Register;
