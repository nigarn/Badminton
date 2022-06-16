import React from "react";
import "assets/styles/personCard.scss";
//import "assets/styles/layout.scss";
import person from "assets/header/person.jpg";
import about from "assets/personCard-icons/about.svg";
const ItemCard = ({rate}) => {

  return (
    <div className="person-card">
      <div className="person-card__up">
        <div className="person-card__info">
          <div className="person-img">
            <img src={person} alt="person" />
          </div>
          <p className="person-title">Ea mollit</p>
          <p className="person-definition">Amet sunt</p>
        </div>
        <img src={about} alt="about" />
      </div>

      <div className="person-card__down">
        <div className="status">Available</div>
        <div className="rating">
         {rate}:<b>4</b>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
