import "./App.css";
import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import GamesData from "./components/GamesData";
import { GameContext } from "./context/GameContext";
import { Home } from "./pages";

function App() {
  const { currentTheme } = useContext(GameContext);
  return (
    <div
      className={`${currentTheme ? "bg_light" : "bg_dark"}`}
      style={{
        minHeight: "100vh",
        height: "100%",
      }}
    >
      <Home />
    </div>
  );
}

export default App;
