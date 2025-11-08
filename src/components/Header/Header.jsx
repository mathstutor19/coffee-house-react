import { useEffect, useState } from "react";
import "./Header.css";
import logo from "../../images/icons/logo.svg";
import coffeeCup from "../../images/icons/coffee-cup.svg";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { useDarkMode } from "../../context/DarkModeContext.jsx";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { darkMode } = useDarkMode();
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="container header">
      <nav className="nav">
        <Link to={"/"}>
          <div className={darkMode ? "dark" : ""}>
            <img className="nav__logo" src={logo} alt="logo" />
          </div>
        </Link>

        {/* Desktop menu */}
        <ul className="nav__items">
          <li>
            <Link className="nav__link" smooth to="/">
              Favorite coffee
            </Link>
          </li>
          <li>
            <Link className="nav__link" smooth to="/">
              About
            </Link>
          </li>
          <li>
            <Link className="nav__link" smooth to="/">
              Mobile app
            </Link>
          </li>
          <li>
            <HashLink className="nav__link" smooth to="#footer">
              Contact us
            </HashLink>
          </li>
        </ul>
        <DarkModeToggle />
        {/* Menu link */}
        <div className="nav__menu">
          <Link to={"/menu"} className="nav__menu__link">
            <span>Menu</span>
            <div className={darkMode ? "dark" : ""}>
              <img
                className="nav__coffee-cup-icon"
                src={coffeeCup}
                alt="coffee-cup"
              />
            </div>
          </Link>
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
            <div className={darkMode ? "dark" : ""}>
              {/* <CoffeeIcon /> */}
              <img
                className="nav__coffee-cup-icon"
                src={coffeeCup}
                alt="coffee-cup"
              />
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
