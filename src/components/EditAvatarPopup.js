import { useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {

  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
  <PopupWithForm name='avatar' title='Обновить аватар' buttonText='Сохранить' {...props}  onSubmit={handleSubmit}>
  <label className="popup__field">
    <input ref={avatarRef} id="avatar-input" type="url" name="avatar" className="input" placeholder="Ссылка на аватар" required />
    <span className="avatar-input-error popup__input-error"></span>
  </label>
  </PopupWithForm>
  );
}

export default EditAvatarPopup;
