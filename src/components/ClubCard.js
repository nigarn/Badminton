import React from "react";
import "assets/styles/layout.scss";
import club1 from "assets/clubs/images/club1.png";
import club1flag from "assets/clubs/images/club1flag.png";

import "assets/styles/clubCard.scss";
const ClubCard = () => {
  return (
    <>
      <div className="club-card">
        <div className="club-card-img">
          <div className="club">
            <img src={club1} alt="club" />
          </div>

          <div className="flag">
            <img src={club1flag} alt="flag" />
          </div>
        </div>
        <p className="club-name">
          <b>Lorem ipsum</b>
        </p>
        <p className="name-definition">Lorem ipsum</p>
      </div>
    </>
  );
};

export default ClubCard;
