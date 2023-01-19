import { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api.getUserInfo()
    .then((result) => {
      setCurrentUser(result);
    })
    .catch((err) => {
      console.log(err);
    })
  },[]);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }
  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCard({});
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Header />
        <Main handlers = {{onEditProfile: handleEditProfileClick, onAddPlace: handleAddPlaceClick, onEditAvatar: handleEditAvatarClick, onCardClick: handleCardClick}} />
        <Footer />
        <PopupWithForm name='profile' title='Редактировать профиль' buttonText='Сохранить' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <label className="popup__field">
            <input id="title-input" type="text" name="name" className="input" placeholder="Имя" value="" minLength="2" maxLength="40" required />
            <span className="title-input-error popup__input-error"></span>
          </label>
          <label className="popup__field">
            <input id="subtitle-input" type="text" name="about" className="input" placeholder="Фамилия" value="" minLength="2" maxLength="200" required />
            <span className="subtitle-input-error popup__input-error"></span>
          </label>
        </PopupWithForm>

        <PopupWithForm name='element' title='Новое место' buttonText='Создать' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <label className="popup__field">
            <input id="text-input" type="text" name="name" className="input" placeholder="Название" minLength="2" maxLength="30" required />
            <span className="text-input-error popup__input-error"></span>
          </label>
          <label className="popup__field">
            <input id="link-input" name="link" className="input" placeholder="Ссылка на картинку" type="url" required />
            <span className="link-input-error popup__input-error"></span>
          </label>
        </PopupWithForm>

        <PopupWithForm name='avatar' title='Обновить аватар' buttonText='Сохранить' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <label className="popup__field">
            <input id="avatar-input" type="url" name="avatar" className="input" placeholder="Ссылка на аватар" required />
            <span className="avatar-input-error popup__input-error"></span>
          </label>
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        {/* <div className="popup popup_type_accept" id="popup-accept">
          <div className="popup__window">
            <button aria-label="кнопка закрытия" type="button" className="button-opacity popup__close-button"></button>
            <h2 className="popup__title">Вы уверены?</h2>
            <form className="popup__form" name="accept" noValidate>
              <button aria-label="кнопка принять" type="submit" className="popup__submit-button">Да</button>
            </form>
          </div>
        </div> */}

      </div>
    </CurrentUserContext.Provider>

  );
}

export default App;
