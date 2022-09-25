import React, { useContext, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { PacmanLoader } from "react-spinners";
import { GameContext } from "../Context/GameContext";
import GamesDisplay from "./GamesDisplay";
import { MdModeNight, MdLightMode } from "react-icons/md";

const GamesData = () => {
  const { data, isLoading, handleToggleTheme, isDarkMode } =
    useContext(GameContext);
  const [color] = useState("#EAE800");

  return (
    <>
      <div className="d-flex justify-content-end pt-4">
        <Button
          variant={isDarkMode ? "dark" : "light"}
          style={{ borderRadius: "5rem" }}
          onClick={handleToggleTheme}
        >
          {isDarkMode ? (
            <MdModeNight size={25} color="dark" />
          ) : (
            <MdLightMode size={25} color="dark" />
          )}
        </Button>
      </div>
      <h1
        className={
          isDarkMode
            ? "text-center pt-5 title_text_dark"
            : "text-center pt-5 title_text_light"
        }
      >
        Games List
      </h1>
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
