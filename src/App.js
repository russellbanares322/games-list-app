import "./App.css";
import React from "react";
import { Container, Row } from "react-bootstrap";
import GamesData from "./pages/GamesData";

function App() {
  return (
    <div className="App">
      <Row>
        <GamesData />
      </Row>
    </div>
  );
}

export default App;
