import React, { useContext } from "react";
import { Card, Badge, Container } from "react-bootstrap";
import { GameContext } from "../context/GameContext";

const GamesDisplay = ({ data }) => {
  const { currentTheme } = useContext(GameContext);

  return (
    <>
      <div style={{ marginTop: "5rem" }}>
        <Container className="d-flex justify-content-center">
          <Card
            className={currentTheme ? "my-5 card_light" : "my-5 card_dark"}
            style={
              currentTheme
                ? {
                    width: "21rem",
                    height: "600px",
                    color: "#211D3B",
                    borderRadius: "2rem",
                  }
                : {
                    width: "21rem",
                    height: "600px",
                    color: "#FFFFFF",
                    borderRadius: "2rem",
                  }
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
              <Card.Link
                href={data.game_url}
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <small
                  style={
                    currentTheme
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
        </Container>
      </div>
    </>
  );
};

export default GamesDisplay;
