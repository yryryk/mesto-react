import { useState, useEffect, useContext } from 'react';
import PopupWithForm from './PopupWithForm';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
  <PopupWithForm name='profile' title='Редактировать профиль' buttonText='Сохранить' {...props}  onSubmit={handleSubmit}>
    <label className="popup__field">
      <input id="title-input" type="text" name="name" className="input" placeholder="Имя" onChange={handleNameChange} defaultValue={name} minLength="2" maxLength="40" required />
      <span className="title-input-error popup__input-error"></span>
    </label>
    <label className="popup__field">
      <input id="subtitle-input" type="text" name="about" className="input" placeholder="Описание" onChange={handleDescriptionChange} defaultValue={description} minLength="2" maxLength="200" required />
      <span className="subtitle-input-error popup__input-error"></span>
    </label>
  </PopupWithForm>
  );
}

export default EditProfilePopup;
