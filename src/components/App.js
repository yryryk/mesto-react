import { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([resultInfo, resultCards]) => {
      setCurrentUser(resultInfo);
      setCards(resultCards);
    })
    .catch((err) => {
      console.log(err);
    });
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

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards((state) =>[...state.filter((c) => c._id !== card._id)]);
    });
  }

  function handleUpdateUser(inputValuesUser) {
    api.setUserInfo(inputValuesUser)
    .then((result) => {
      setCurrentUser(result);
      closeAllPopups();
    })
  }

  function handleUpdateAvatar(inputValuesAvatar) {
    api.setUserAvatar(inputValuesAvatar)
    .then((result) => {
      setCurrentUser(result);
      closeAllPopups();
    })
  }

  function handleAddPlace(inputValuesPlace) {
    api.setCard(inputValuesPlace)
    .then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Header />
        <Main handlers={{onEditProfile: handleEditProfileClick, onAddPlace: handleAddPlaceClick, onEditAvatar: handleEditAvatarClick, onCardClick: handleCardClick, onCardLike: handleCardLike, onCardDelete: handleCardDelete}}  cards={cards} />
        <Footer />

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlace} />

        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />

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
