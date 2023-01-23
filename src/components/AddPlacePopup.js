import { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {

  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name,
      link,
    });
  }

  useEffect(() => {
    if(props.isOpen) {
      setName('');
      setLink('');
    }
  }, [props.isOpen]);

  return (
    <PopupWithForm name='element' title='Новое место' buttonText='Создать' {...props}  onSubmit={handleSubmit}>
    <label className="popup__field">
      <input id="text-input" type="text" name="name" className="input" onChange={handleNameChange} value={name} placeholder="Название" minLength="2" maxLength="30" required />
      <span className="text-input-error popup__input-error"></span>
    </label>
    <label className="popup__field">
      <input id="link-input" name="link" className="input" onChange={handleLinkChange} value={link} placeholder="Ссылка на картинку" type="url" required />
      <span className="link-input-error popup__input-error"></span>
    </label>
  </PopupWithForm>
  );
}

export default AddPlacePopup;
