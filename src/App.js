import "./App.css";
import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import GamesData from "./pages/GamesData";
import { GameContext } from "./Context/GameContext";

function App() {
  const { isDarkMode } = useContext(GameContext);
  return (
    <Container
      fluid
      style={
        isDarkMode
          ? { backgroundColor: "#DADCE0" }
          : { backgroundColor: "#080325" }
      }
    >
      <GamesData />
    </Container>
  );
}

export default App;
