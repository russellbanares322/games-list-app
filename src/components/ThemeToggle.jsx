import { MdModeNight, MdLightMode } from "react-icons/md";
import { useContext } from "react";
import { GameContext } from "../context/GameContext";

const ThemeToggle = () => {
  const { currentTheme, handleToggleTheme } = useContext(GameContext);

  return (
    <span
      className="toggle_parent"
      style={{
        backgroundColor: currentTheme ? "#080325" : "#DADCE0",
        cursor: "pointer",
      }}
      onClick={handleToggleTheme}
    >
      <span
        className="toggle_button"
        style={{
          left: currentTheme ? "-1rem" : "0.6rem",
          backgroundColor: currentTheme ? " #DADCE0" : "#080325",
        }}
      >
        {currentTheme ? (
          <MdLightMode size={15} color="dark" className="mx-1 mb-1" />
        ) : (
          <MdModeNight size={15} color="#DADCE0" className="mx-1 mb-1" />
        )}
      </span>
    </span>
  );
};

export default ThemeToggle;
