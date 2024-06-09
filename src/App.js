import "./App.css";
import React, { useContext } from "react";
import { GameContext } from "./context/GameContext";
import { Home } from "./pages";

function App() {
  const { isDarkMode } = useContext(GameContext);
  return (
    <div
      className={`${isDarkMode ? "bg_dark" : "bg_light"}`}
      style={{
        minHeight: "100vh",
        height: "100%",
        overflowX: "hidden",
      }}
    >
      <Home />
    </div>
  );
}

export default App;
