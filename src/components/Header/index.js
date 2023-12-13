import { NavLink } from "react-router-dom";
import "./header.scss";
import React from "react";
import logo from "../../assets/logo.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Logo" />
      <nav className="header__nav">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/About">A Propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;
