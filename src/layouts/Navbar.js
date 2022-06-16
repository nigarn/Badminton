import React from "react";
import { navbarIcons } from "../services/navbarData";
import "assets/styles/navbar.scss";
import arrow from "assets/navbar-icons/arrow.svg";
import settings from "assets/navbar-icons/settings.svg";
import { NavLink } from "react-router-dom";
const Navbar = ({ toggleClass, isActive }) => {
  return (
    <div className={`navbar ${isActive ? "navbar-menu" : "navbar-icons"}`}>
      <ul>
        <li onClick={toggleClass} className='collapse'>
          <img src={arrow} alt="arrow" className={isActive && "toggle-icon"} />
          {isActive && <p>Collapse</p>}
        </li>
        {navbarIcons.map((icon, index) => (
          <li key={index}>
            <img src={icon.img} alt={icon.title} />
            {isActive && (
              <NavLink to={icon.shortcut} style={{ textDecoration: "none" }}>
                <p>{icon.title}</p>
              </NavLink>
            )}
          </li>
        ))}
        <li style={{ marginTop: "50px" }}>
          <img
            src={settings}
            alt="settings"
            className={isActive && "toggle-icon"}
          />
          {isActive && <p>Ayarlar</p>}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
