import React, { useContext } from "react";
import { Card, Col, Badge } from "react-bootstrap";
import { GameContext } from "../Context/GameContext";

const GamesDisplay = ({ data }) => {
  const { isDarkMode, handleToggleTheme } = useContext(GameContext);
  return (
    <>
      <Col className="d-flex justify-content-center mt-5" sm={4} lg={4}>
        <Card
          className={isDarkMode ? "mt-5 card_light" : "mt-5 card_dark"}
          style={
            isDarkMode
              ? { width: "21rem", height: "600px", color: "#211D3B" }
              : { width: "21rem", height: "600px", color: "#FFFFFF" }
          }
        >
          <Card.Img variant="top" src={data.thumbnail} />
          <Card.Body>
            <Card.Title className="text-center">{data.title}</Card.Title>
            <Card.Text className="text-center">
              <small>
                Category:
                <span style={{ fontWeight: "bold" }}>{data.genre}</span>
              </small>
            </Card.Text>
            <div>
              <small>
                <Badge className="text-white mb-2">{data.developer}</Badge>
              </small>
            </div>
            <div className="mb-1">
              <small>{data.short_description}</small>
            </div>
            <br />
            <Card.Link href={data.game_url}>
              <small
                style={
                  isDarkMode
                    ? {
                        color: "#211D3B",
                        fontStyle: "italic",
                      }
                    : {
                        color: "#FFFFFF",
                        fontStyle: "italic",
                      }
                }
              >
                {data.game_url}
              </small>
            </Card.Link>
            <br />
          </Card.Body>
          <Card.Footer className="text-muted">
            Release Date: {data.release_date}
          </Card.Footer>
        </Card>
      </Col>
    </>
  );
};

export default GamesDisplay;
