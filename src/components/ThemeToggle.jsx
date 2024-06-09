import { MdModeNight, MdLightMode } from "react-icons/md";
import { useContext } from "react";
import { GameContext } from "../context/GameContext";

const ThemeToggle = () => {
  const { isDarkMode, handleToggleTheme } = useContext(GameContext);

  return (
    <span
      className="toggle_parent"
      style={{
        backgroundColor: isDarkMode ? "#DADCE0" : "#080325",
        cursor: "pointer",
      }}
      onClick={handleToggleTheme}
    >
      <span
        className="toggle_button"
        style={{
          left: isDarkMode ? "-1rem" : "0.6rem",
          backgroundColor: isDarkMode ? " #DADCE0" : "#080325",
        }}
      >
        {isDarkMode ? (
          <MdModeNight size={15} color="#DADCE0" className="mx-1 mb-1" />
        ) : (
          <MdLightMode size={15} color="dark" className="mx-1 mb-1" />
        )}
      </span>
    </span>
  );
};

export default ThemeToggle;
