import "./App.css";
import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import GamesData from "./pages/GamesData";
import { GameContext } from "./Context/GameContext";

function App() {
  const { isDarkMode } = useContext(GameContext);
  return (
    <Container fluid className={isDarkMode ? "bg_light" : "bg_dark"}>
      <GamesData />
    </Container>
  );
}

export default App;
