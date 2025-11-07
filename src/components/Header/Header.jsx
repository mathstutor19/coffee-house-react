import { useState } from "react";
import "./Header.css";
import logo from "../../images/icons/logo.svg";
import coffeeCup from "../../images/icons/coffee-cup.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="container header">
      <nav className="nav">
        <a href="/">
          <img className="nav__logo" src={logo} alt="logo" />
        </a>

        {/* Desktop menu */}
        <ul className="nav__items">
          <li>
            <a className="nav__link" href="/">
              Favorite coffee
            </a>
          </li>
          <li>
            <a className="nav__link" href="/">
              About
            </a>
          </li>
          <li>
            <a className="nav__link" href="/">
              Mobile app
            </a>
          </li>
          <li>
            <a className="nav__link" href="#footer">
              Contact us
            </a>
          </li>
        </ul>

        {/* Menu link */}
        <div className="nav__menu">
          <a href="/menu" className="nav__menu__link">
            <span>Menu</span>
            <img src={coffeeCup} alt="coffee-cup" />
          </a>
        </div>

        {/* Hamburger button */}
        <div
          className={`small__menu ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Mobile menu */}
      <nav className={`mobile__menu ${isMenuOpen ? "active" : ""}`}>
        <ul className="nav__mobile__items">
          <li>
            <a className="nav__mobile__link" href="/">
              Favorite coffee
            </a>
          </li>
          <li>
            <a className="nav__mobile__link" href="/">
              About
            </a>
          </li>
          <li>
            <a className="nav__mobile__link" href="/">
              Mobile app
            </a>
          </li>
          <li>
            <a className="nav__mobile__link" href="#footer">
              Contact us
            </a>
          </li>
        </ul>
        <div className="nav__mobile__menu">
          <a href="/menu" className="nav__mobile__link">
            <span>Menu</span>
            <img src={coffeeCup} alt="coffee-cup" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
