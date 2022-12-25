import api from '../utils/Api';
import { useState,  useEffect} from 'react';

function Main(props) {
  const {onEditProfile, onAddPlace, onEditAvatar} = props.handlers;

  const [userName, setUserName] = useState('giq');
  const [userDescription, setUserDescription] = useState('sr');
  const [userAvatar, setUserAvatar] = useState('../../../images/image.jpg');

  useEffect(() => {
    api.getUserInfo()
    .then((result) => {
      setUserName(result.name);
      setUserDescription(result.about);
      setUserAvatar(result.avatar);
    })
    .catch((err) => {
      console.log(err);
    })
  },[]);

  return (
    <main>
      <section className="profile">
        <div className="profile__user">
          <button onClick={onEditAvatar} aria-label="кнопка добавить" type="button" className="profile__user-picture" style={{ backgroundImage: `url(${userAvatar})` }}><div className="profile__user-pen-editing"></div></button>
          <div className="profile__user-info">
            <h1 className="profile__title">{userName}</h1>
            <button onClick={onEditProfile} aria-label="кнопка редактировать" type="button" className="button-opacity profile__edit-button"></button>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button onClick={onAddPlace} aria-label="кнопка добавить" type="button" className="button-opacity profile__add-button"></button>
      </section>

      <section className="elements" aria-label="Секция с картинками">
      </section>
    </main>
  );
}

export default Main;
