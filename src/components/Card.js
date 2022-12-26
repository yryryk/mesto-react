function Card(props) {
  const card = props.card;

  function handleClick() {
    props.onCardClick(card);
  }
  
  return (
    <div className="elements__photo">
      <img className="elements__image" src={card.link} alt={card.name} onClick={handleClick} />
      <div className="elements__paraphernalia">
        <h2 className="elements__title">{card.name}</h2>
        <div className="elements__like-container">
          <button aria-label="поставить лайк" type="button" className="elements__like-button"></button>
          <span className="elements__like-value"></span>
        </div>
        <button aria-label="кнопка удаления" type="button" className="button-opacity elements__delete-button"></button>
      </div>
    </div>
  );
}

export default Card;
