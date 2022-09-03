import React, { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { PacmanLoader } from "react-spinners";
import { GameContext } from "../Context/GameContext";
import GamesDisplay from "./GamesDisplay";

const GamesData = () => {
  const { data, isLoading } = useContext(GameContext);
  const [color] = useState("#EAE800");

  return (
    <>
      <h1 className="text-center my-5">Games</h1>
      <Col className="d-flex justify-content-center">
        <Row>
          {isLoading ? (
            <>
              <PacmanLoader size={60} color={color} />
            </>
          ) : (
            <>
              {data.map((gameData) => (
                <GamesDisplay data={gameData} key={gameData.id} />
              ))}
            </>
          )}
        </Row>
      </Col>
    </>
  );
};

export default GamesData;
