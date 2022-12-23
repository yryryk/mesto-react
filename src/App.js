// import logo from './logo.svg';
import './index.css';

function App() {
  return (
  <div className="App">
    <header className="header">
      <div className="header__logo"></div>
    </header>

    <main>
      <section className="profile">
        <div className="profile__user">
          <button aria-label="кнопка добавить" type="button" className="profile__user-picture"><div className="profile__user-pen-editing"></div></button>
          <div className="profile__user-info">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button aria-label="кнопка редактировать" type="button" className="button-opacity profile__edit-button"></button>
            <p className="profile__subtitle">Исследователь океана</p>
          </div>
        </div>
        <button aria-label="кнопка добавить" type="button" className="button-opacity profile__add-button"></button>
      </section>

      <section className="elements" aria-label="Секция с картинками">
      </section>
    </main>

    <footer className="footer">
      <p className="footer__copyright">&copy; 2022 Mesto Russia</p>
    </footer>

    <template id="element">
      <div className="elements__photo">
        <img className="elements__image" src="#" alt="" />
        <div className="elements__paraphernalia">
          <h2 className="elements__title">#</h2>
          <div className="elements__like-container">
            <button aria-label="поставить лайк" type="button" className="elements__like-button"></button>
            <span className="elements__like-value"></span>
          </div>
          <button aria-label="кнопка закрытия" type="button" className="button-opacity elements__delete-button"></button>
        </div>
      </div>
    </template>

    <div className="popup popup_type_setter" id="popup-profile">
      <div className="popup__window">
        <button aria-label="кнопка закрытия" type="button" className="button-opacity popup__close-button"></button>
        <h2 className="popup__title">Редактировать профиль</h2>
        <form className="popup__form" name="profile" noValidate>
          <label className="popup__field">
            <input id="title-input" type="text" name="name" className="input" placeholder="Имя" value="" minLength="2" maxLength="40" required />
            <span className="title-input-error popup__input-error"></span>
          </label>
          <label className="popup__field">
            <input id="subtitle-input" type="text" name="about" className="input" placeholder="Фамилия" value="" minLength="2" maxLength="200" required />
            <span className="subtitle-input-error popup__input-error"></span>
          </label>
          <button aria-label="кнопка сохранить" type="submit" className="popup__submit-button">Сохранить</button>
        </form>
      </div>
    </div>
    <div className="popup popup_type_setter" id="popup-element">
      <div className="popup__window">
        <button aria-label="кнопка закрытия" type="button" className="button-opacity popup__close-button"></button>
        <h2 className="popup__title">Новое место</h2>
        <form className="popup__form" name="element" noValidate>
          <label className="popup__field">
            <input id="text-input" type="text" name="name" className="input" placeholder="Название" minLength="2" maxLength="30" required />
            <span className="text-input-error popup__input-error"></span>
          </label>
          <label className="popup__field">
            <input id="link-input" name="link" className="input" placeholder="Ссылка на картинку" type="url" required />
            <span className="link-input-error popup__input-error"></span>
          </label>
          <button aria-label="кнопка сохранить" type="submit" className="popup__submit-button">Создать</button>
        </form>
      </div>
    </div>
    <div className="popup popup_type_image popup_make-color_dark" id="popup-image">
      <div className="popup__image-window">
        <button aria-label="кнопка закрытия" type="button" className="button-opacity popup__close-button"></button>
        <img className="popup__image" src="#" alt="" />
        <h2 className="popup__image-title">#</h2>
      </div>
    </div>
    <div className="popup popup_type_accept" id="popup-accept">
      <div className="popup__window">
        <button aria-label="кнопка закрытия" type="button" className="button-opacity popup__close-button"></button>
        <h2 className="popup__title">Вы уверены?</h2>
        <form className="popup__form" name="accept" noValidate>
          <button aria-label="кнопка принять" type="submit" className="popup__submit-button">Да</button>
        </form>
      </div>
    </div>
    <div className="popup popup_type_setter" id="popup-avatar">
      <div className="popup__window">
        <button aria-label="кнопка закрытия" type="button" className="button-opacity popup__close-button"></button>
        <h2 className="popup__title">Обновить аватар</h2>
        <form className="popup__form" name="avatar" noValidate>
          <label className="popup__field">
            <input id="avatar-input" type="url" name="avatar" className="input" placeholder="Ссылка на аватар" required />
            <span className="avatar-input-error popup__input-error"></span>
          </label>
          <button aria-label="кнопка сохранить" type="submit" className="popup__submit-button">Сохранить</button>
        </form>
      </div>
    </div>

  </div>
      
  );
}

export default App;
