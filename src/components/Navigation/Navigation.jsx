import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="header__wrapper">
      <ul className="header__navigation">
        <li className="header__navigation--link">
          <NavLink to="/" className={(nav)=>(nav.isActive ? "header__navigation--active" : "")}>
            Accueil
          </NavLink>
        </li>
        <li className="header__navigation--link">
          <NavLink to="/about" className={(nav)=>(nav.isActive ? "header__navigation--active" : "")}>
            A propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
