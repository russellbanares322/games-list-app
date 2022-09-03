import React from "react";
import { Card, Col, Badge } from "react-bootstrap";

const GamesDisplay = ({ data }) => {
  return (
    <>
      <Col className="d-flex justify-content-center" sm={4}>
        <Card className="mt-5 card" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={data.thumbnail} />
          <Card.Body>
            <Card.Title>{data.title}</Card.Title>
            <Card.Text>{data.genre}</Card.Text>
            <small>
              <Badge variant="primary">{data.developer}</Badge>
            </small>
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
