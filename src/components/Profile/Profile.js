import React, {useContext} from 'react';
import { useForm} from 'react-hook-form';
import './Profile.css';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';

function Profile(props) {

  const { register, formState: {errors, isValid}, handleSubmit } = useForm({mode: 'onBlur'});

  const user = useContext(CurrentUserContext);

  function submitProfile(data) {
    if(data.name !== user.name || data.email !== user.email) {
      props.editUser({
        name: data.name,
        email: data.email,
      });
    } else {
      return !isValid
    }
  }

  return (
    <section className="profile">
      <h1 className="profile__title">Привет, {user.name}!</h1>
      <form className="profile__form" onSubmit = {handleSubmit(submitProfile)}>
        <div className="profile__form-group">
          <label className="profile__form-label" for="name">Имя</label>
          <input id="name" className="profile__form-input" type="text" name="name"
            {...register('name', {required: true, minLength: 2, maxLength: 30,
              value: user.name, pattern: /[a-zA-Zа-яА-Я\-\s]/})}
          />
        </div>
        <span className="profile__form-error">
          {errors.name?.type === "required" && "Поле необходимо заполнить"}
          {errors.name?.type === "pattern" && "Недопустимые символы"}
          {errors.name?.type === "minLength" && "Введенный текст меньше 2-х символов"}
          {errors.name?.type === "maxLength" && "Максимальное количество символов"}
        </span>
        <div className="profile__line"></div>
        <div className="profile__form-group">
          <label className="profile__form-label" for="email">E-mail</label>
          <input id="email" className="profile__form-input" type="text" name="email"
            {...register('email', {required: true, value: user.email,
            pattern: /([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,})\.([A-z]{2,8})/})} />
        </div>
        <span className="profile__form-error">
          {errors.email?.type === "required" && "Поле необходимо заполнить"}
          {errors.email?.type === "pattern" && "Недопустимые символы"}
        </span>
        <div className = "profile__button-group">
          <p className = "profile__button-error">{props.message}</p>
          <button className={"profile__form-edit-button" + (!isValid?" profile__form-edit-button_disabled":"")}
            disabled={!isValid} type="submit">Редактировать</button>
        </div>
      </form>
      <button className="profile__form-leave-button" type="submit" onClick={() => props.logOut()}>Выйти из аккаунта</button>
    </section>
  );
}

export default Profile;
