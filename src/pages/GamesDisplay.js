import React from "react";
import { Card, Col, Badge } from "react-bootstrap";

const GamesDisplay = ({ data }) => {
  return (
    <>
      <Col className="d-flex justify-content-center mt-5" sm={4}>
        <Card className="mt-5 card" style={{ width: "21rem", height: "600px" }}>
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
                <Badge bg="warning" className="text-dark mb-2">
                  {data.developer}
                </Badge>
              </small>
            </div>
            <div className="mb-1">
              <small>{data.short_description}</small>
            </div>
            <br />
            <Card.Link href={data.game_url}>
              <small>{data.game_url}</small>
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
