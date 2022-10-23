import './Profile.css';

function Profile() {
  return (
    <section className="profile">
      <h1 className="profile__title">Привет, Владимир!</h1>
      <form className="profile__form">
        <div className="profile__form-group">
          <label className="profile__form-label" for="name">Имя</label>
          <input id="name" className="profile__form-input"
          type="text" name="name" minLength="2" maxLength="40" required
          value="Владимир" />
        </div>
        <span className="profile__form-error">Что-то пошло не так...</span>
        <div className="profile__line"></div>
        <div className="profile__form-group">
          <label className="profile__form-label" for="email">E-mail</label>
          <input id="email" className="profile__form-input"
          type="text" name="about" minLength="2" maxLength="40" required
          value="pochta@yandex.ru" />
        </div>
        <span className="profile__form-error">Что-то пошло не так...</span>
      </form>
      <button className="profile__form-edit-button" type="submit">Редактировать</button>
      <button className="profile__form-leave-button" type="submit">Выйти из аккаунта</button>
    </section>
  );
}

export default Profile;
