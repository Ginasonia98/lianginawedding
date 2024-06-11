// src/EventCard.js
import React from "react";
import { Card, Button } from "react-bootstrap";

const EventCard = ({ image, title, text, link }) => {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary" href={link}>
          Hadiahkan ke Lian & Gina
        </Button>
      </Card.Body>
    </Card>
  );
};

export default EventCard;
