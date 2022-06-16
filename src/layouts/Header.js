import React from "react";
import logo from "assets/header/logo.svg";
import notification from "assets/header/notification.svg";
import person from "assets/header/person.jpg";
import "assets/styles/header.scss";
const Header = () => {
  return (
    <div className="header">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="header__profile">
        <div className="notif-information">
          <img src={notification} alt="notif" />
          <div className="notif-count">
            <p>11</p>
          </div>
        </div>

        <p className="name">Lorem ipsum </p>
        <div className="prof-img">
          <img src={person} alt="prof-img" />
        </div>
      </div>
    </div>
  );
};

export default Header;
