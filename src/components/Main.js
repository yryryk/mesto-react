import api from '../utils/Api';
import Card from './Card';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import { useState,  useEffect, useContext} from 'react';

function Main(props) {
  const {onEditProfile, onAddPlace, onEditAvatar, onCardClick} = props.handlers;

  const currentUser = useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getInitialCards()
    .then((result) => {
      setCards(result)
    })
    .catch((err) => {
      console.log(err);
    })
  },[]);

  return (
    <main>
      <section className="profile">
        <div className="profile__user">
          <button onClick={onEditAvatar} aria-label="кнопка добавить" type="button" className="profile__user-picture" style={{ backgroundImage: `url(${currentUser.avatar})` }}><div className="profile__user-pen-editing"></div></button>
          <div className="profile__user-info">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button onClick={onEditProfile} aria-label="кнопка редактировать" type="button" className="button-opacity profile__edit-button"></button>
            <p className="profile__subtitle">{currentUser.about}</p>
          </div>
        </div>
        <button onClick={onAddPlace} aria-label="кнопка добавить" type="button" className="button-opacity profile__add-button"></button>
      </section>

      <section className="elements" aria-label="Секция с картинками">
        {cards.map((card) => (
          <Card card ={card} onCardClick={onCardClick} key={card._id} />
        ))}
      </section>
    </main>
  );
}

export default Main;
