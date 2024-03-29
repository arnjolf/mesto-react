import { useEffect, useState, useContext } from "react";
import { api } from "../../utils/Api";
import Card from "../Card/Card";
import { UserContext } from "../../contexts/CurrentUserContext";

export default function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onCardLike,
  onCardDelete,
  cards,
}) {
  const userObject = useContext(UserContext);

  return (
    <main className="main">
      <section className="profile">
        <div
          onClick={onEditAvatar}
          className="profile__avatar-place"
          style={{ backgroundImage: `url(${userObject.avatar})` }}
        ></div>
        <div className="profile__info">
          <h1 className="profile__name">{userObject.name}</h1>
          <button
            onClick={onEditProfile}
            type="button"
            className="profile__edit-button"
            aria-label="Редактировать профиль"
          ></button>
          <p className="profile__job">{userObject.about}</p>
        </div>
        <button
          onClick={onAddPlace}
          type="button"
          className="profile__add-button"
          aria-label="добавить карточку"
        ></button>
      </section>
      <section className="elements">
        {cards.map((card) => {
          return (
            <Card
              onCardClick={onCardClick}
              key={card._id}
              card={card}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          );
        })}
      </section>
    </main>
  );
}
