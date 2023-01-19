import "./App.css";
import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import GamesData from "./pages/GamesData";
import { GameContext } from "./context/GameContext";

function App() {
  const { currentTheme } = useContext(GameContext);
  return (
    <Container
      fluid
      className={currentTheme ? "bg_light" : "bg_dark"}
      style={{ paddingBottom: "17.8rem" }}
    >
      <GamesData />
    </Container>
  );
}

export default App;
