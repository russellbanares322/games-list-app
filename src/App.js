import "./App.css";
import React from "react";
import { Container, Row } from "react-bootstrap";
import GamesData from "./pages/GamesData";

function App() {
  return (
    <Container>
      <Row>
        <GamesData />
      </Row>
    </Container>
  );
}

export default App;
