import React from "react";
import { Card, Button } from "react-bootstrap";

const EventCard = ({ image, title, text, link }) => {
  return (
    <Card className="h-100">
      <div style={{ height: "200px", overflow: "hidden" }}>
        <Card.Img
          variant="top"
          src={image}
          style={{ height: "100%", objectFit: "cover" }}
        />
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
<<<<<<< HEAD
        <Card.Text style={{ overflowY: "auto" }}>{text}</Card.Text>
        <div className="mt-auto">
          {" "}
          {/* Tambahkan div dengan class "mt-auto" untuk membuat tombol berada di bagian bawah */}
          <Button variant="danger" href={link}>
            Buy Now
          </Button>
        </div>
=======
        <Card.Text>{text}</Card.Text>
        <Button variant="primary" href={link}>
          Hadiahkan ke Lian & Gina
        </Button>
>>>>>>> 9c03d0da8612114c21d9ee2abf2c2b815342db39
      </Card.Body>
    </Card>
  );
};

export default EventCard;
