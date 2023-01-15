import "./App.css";
import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import GamesData from "./pages/GamesData";
import { GameContext } from "./Context/GameContext";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  const { isDarkMode } = useContext(GameContext);
  return (
    <Container
      fluid
      className={isDarkMode ? "bg_light" : "bg_dark"}
      style={{ paddingBottom: "17.8rem" }}
    >
      <SkeletonTheme baseColor="#313131" highlightColor="#525252">
        <GamesData />
      </SkeletonTheme>
    </Container>
  );
}

export default App;
