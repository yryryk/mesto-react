function PopupWithForm(props) {

  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen&&'popup_open'}`} id={`popup-${props.name}`}>
      <div className="popup__window">
        <button aria-label="кнопка закрытия" type="button" className="button-opacity popup__close-button" onClick={props.onClose}></button>
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name={props.name} noValidate>
          {props.children}
          <button aria-label="кнопка сохранить" type="submit" className="popup__submit-button">Сохранить</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
