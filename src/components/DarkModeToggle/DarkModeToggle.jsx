import { useDarkMode } from "../../context/DarkModeContext";
import darkModeIcon from "../../images/icons/dark_mode.svg";
import lightModeIcon from "../../images/icons/light_mode.svg";
import "./DarkModeToggle.css";
const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <div
      className="header-dark-mode"
      onClick={() => setDarkMode(!darkMode)}
      style={{
        padding: "0.5rem 1rem",
        cursor: "pointer",
      }}
    >
      {darkMode ? (
        <img src={lightModeIcon} alt="lightMode" />
      ) : (
        <img src={darkModeIcon} alt="darkMode" />
      )}
    </div>
  );
};

export default DarkModeToggle;
