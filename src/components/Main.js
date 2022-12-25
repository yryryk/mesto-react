function Main(props) {
  const {onEditProfile, onAddPlace, onEditAvatar} = props.handlers;
 
  return (
    <main>
      <section className="profile">
        <div className="profile__user">
          <button onClick={onEditAvatar} aria-label="кнопка добавить" type="button" className="profile__user-picture"><div className="profile__user-pen-editing"></div></button>
          <div className="profile__user-info">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button onClick={onEditProfile} aria-label="кнопка редактировать" type="button" className="button-opacity profile__edit-button"></button>
            <p className="profile__subtitle">Исследователь океана</p>
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
