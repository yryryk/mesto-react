import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditAvatarPopupClose, setIsEditAvatarPopupClose] = useState(true);


  function handleEditAvatarClick() {
    setIsEditAvatarPopupClose(false);
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditAvatarPopupClose(false);
    setIsEditProfilePopupOpen(true)
  }
  function handleAddPlaceClick() {
    setIsEditAvatarPopupClose(false);
    setIsAddPlacePopupOpen(true)
  }
  function closeAllPopups() {
    setIsEditAvatarPopupClose(true);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false)
  }
  return (
  <div className="App">
    <Header />
    <Main handlers = {{onEditProfile: handleEditProfileClick, onAddPlace: handleAddPlaceClick, onEditAvatar: handleEditAvatarClick}} />
    <Footer />
    <PopupWithForm name='profile' title='Редактировать профиль' isOpen={isEditProfilePopupOpen} onClose={isEditAvatarPopupClose} onCloseAllPopups={closeAllPopups}>
      <label className="popup__field">
        <input id="title-input" type="text" name="name" className="input" placeholder="Имя" value="" minLength="2" maxLength="40" required />
        <span className="title-input-error popup__input-error"></span>
      </label>
      <label className="popup__field">
        <input id="subtitle-input" type="text" name="about" className="input" placeholder="Фамилия" value="" minLength="2" maxLength="200" required />
        <span className="subtitle-input-error popup__input-error"></span>
      </label>
    </PopupWithForm>

    <PopupWithForm name='element' title='Новое место' isOpen={isAddPlacePopupOpen} onClose={isEditAvatarPopupClose} onCloseAllPopups={closeAllPopups}>
      <label className="popup__field">
        <input id="text-input" type="text" name="name" className="input" placeholder="Название" minLength="2" maxLength="30" required />
        <span className="text-input-error popup__input-error"></span>
      </label>
      <label className="popup__field">
        <input id="link-input" name="link" className="input" placeholder="Ссылка на картинку" type="url" required />
        <span className="link-input-error popup__input-error"></span>
      </label>
    </PopupWithForm>

    <PopupWithForm name='avatar' title='Обновить аватар' isOpen={isEditAvatarPopupOpen} onClose={isEditAvatarPopupClose} onCloseAllPopups={closeAllPopups}>
      <label className="popup__field">
        <input id="avatar-input" type="url" name="avatar" className="input" placeholder="Ссылка на аватар" required />
        <span className="avatar-input-error popup__input-error"></span>
      </label>
    </PopupWithForm>


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

  </div>

  );
}

export default App;
