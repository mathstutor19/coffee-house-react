import { useDarkMode } from "../../context/DarkModeContext";

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      style={{
        padding: "0.5rem 1rem",
        cursor: "pointer",
      }}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
